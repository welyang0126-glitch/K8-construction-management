import { useEffect, useState } from 'react';
import { DashboardNavbar } from '../components/Navbar';
import { fetchSheetData, DefectItem } from '../utils/google-sheet';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, Filter, Download, MoreVertical } from 'lucide-react';

const mockChartData = [
    { name: 'Nov 01', defects: 12, resolved: 5 },
    { name: 'Nov 05', defects: 25, resolved: 15 },
    { name: 'Nov 10', defects: 65, resolved: 30 },
    { name: 'Nov 15', defects: 142, resolved: 45 },
    { name: 'Nov 20', defects: 80, resolved: 90 },
    { name: 'Nov 25', defects: 45, resolved: 110 },
    { name: 'Nov 30', defects: 38, resolved: 130 },
];

export default function Dashboard() {
    const [defects, setDefects] = useState<DefectItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [vendorFilter, setVendorFilter] = useState('All');

    useEffect(() => {
        fetchSheetData().then(data => {
            setDefects(data.filter(d => d.ID));
            setLoading(false);
        });
    }, []);

    const getStatusBadgeClass = (status?: string) => {
        const s = status?.trim()?.toLowerCase() || '';
        if (s.includes('resolv') || s.includes('완료')) return 'badge success';
        if (s.includes('progress') || s.includes('진행') || s.includes('review')) return 'badge info';
        if (s.includes('critical') || s.includes('pending') || s.includes('위험')) return 'badge danger';
        return 'badge'; // Default gray
    };

    const filteredDefects = vendorFilter === 'All'
        ? defects
        : defects.filter(d =>
            (d.PIC && d.PIC.toLowerCase().includes(vendorFilter.toLowerCase())) ||
            (d['Work category'] && d['Work category'].toLowerCase().includes(vendorFilter.toLowerCase()))
        );

    const totalDefectsCount = filteredDefects.length;
    let finishedCount = 0;
    let inProgressCount = 0;
    let remainingCount = 0;

    filteredDefects.forEach(d => {
        const s = d.Status?.trim()?.toLowerCase() || '';
        if (s.includes('resolv') || s.includes('완료') || s.includes('close') || s.includes('done')) {
            finishedCount++;
        } else if (s.includes('progress') || s.includes('진행') || s.includes('review') || s.includes('조치중')) {
            inProgressCount++;
        } else {
            remainingCount++;
        }
    });

    // Handle dummy data briefly seen before sheet fetch resolves or if empty results
    const activeTotal = totalDefectsCount > 0 || vendorFilter !== 'All' ? totalDefectsCount : 1248;
    const activeInProgress = totalDefectsCount > 0 || vendorFilter !== 'All' ? inProgressCount : 432;
    const activeRemaining = totalDefectsCount > 0 || vendorFilter !== 'All' ? remainingCount : 116;
    const activeFinished = totalDefectsCount > 0 || vendorFilter !== 'All' ? finishedCount : 700;

    const pctInProgress = activeTotal > 0 ? (activeInProgress / activeTotal) * 100 : 0;
    const pctRemaining = activeTotal > 0 ? (activeRemaining / activeTotal) * 100 : 0;
    const pctFinished = activeTotal > 0 ? (activeFinished / activeTotal) * 100 : 0;

    return (
        <div className="h-full flex-col flex" style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '3rem' }}>
            <DashboardNavbar />

            <main className="container" style={{ marginTop: '2rem' }}>
                <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
                    <div>
                        <h1 className="text-2xl font-bold">Status & Analytics Overview</h1>
                        <p className="text-muted text-sm">Real-time data synced with Google Sheets</p>
                    </div>
                    <div className="flex gap-4">
                        <div style={{ position: 'relative' }}>
                            <Filter size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#111827' }} />
                            <select
                                className="btn btn-outline"
                                value={vendorFilter}
                                onChange={(e) => setVendorFilter(e.target.value)}
                                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', cursor: 'pointer', appearance: 'auto' }}
                            >
                                <option value="All">Filter: All Vendors</option>
                                <option value="Ricons">Ricons</option>
                                <option value="Eunmin S&D">Eunmin S&D</option>
                                <option value="Daeshin">Daeshin</option>
                                <option value="Hyundai Elevator">Hyundai Elevator</option>
                            </select>
                        </div>
                        <a href="https://docs.google.com/spreadsheets/d/1t_feuRxrgQYyKw7PoplyPcyWa73A8lIVq7fHvrLhaIY/export?format=xlsx" className="btn btn-outline" style={{ textDecoration: 'none' }}>
                            <Download size={18} /> Export Report
                        </a>
                        <a
                            href="https://forms.gle/6iwuuqaxHs4D29pk6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ textDecoration: 'none' }}
                        >
                            + Report Defect
                        </a>
                    </div>
                </div>

                {/* Top KPI Cards */}
                <div className="grid grid-cols-4 gap-6" style={{ marginBottom: '2rem' }}>
                    <div className="card">
                        <h3 className="text-muted text-sm font-bold uppercase mb-2">Total Defects</h3>
                        <div className="text-3xl font-bold" style={{ marginBottom: '0.5rem', color: '#0f172a' }}>
                            {activeTotal.toLocaleString()}
                        </div>
                        <div className="text-muted text-xs mt-2" style={{ lineHeight: 1.4 }}>
                            Total = In-Progress + Remaining + Finished
                        </div>
                    </div>
                    <div className="card">
                        <h3 className="text-muted text-sm font-bold uppercase mb-2">In-Progress</h3>
                        <div className="text-3xl font-bold" style={{ marginBottom: '0.5rem', color: '#0f172a' }}>
                            {activeInProgress.toLocaleString()}
                        </div>
                        <div className="progress-bg" style={{ marginBottom: '0.5rem' }}>
                            <div className="progress-fill" style={{ width: `${pctInProgress}%`, background: 'var(--warning)' }}></div>
                        </div>
                        <div className="text-muted text-xs mt-1">{pctInProgress.toFixed(1)}% of total</div>
                    </div>
                    <div className="card">
                        <h3 className="text-muted text-sm font-bold uppercase mb-2">Remaining</h3>
                        <div className="text-3xl font-bold" style={{ marginBottom: '0.5rem', color: '#0f172a' }}>
                            {activeRemaining.toLocaleString()}
                        </div>
                        <div className="progress-bg" style={{ marginBottom: '0.5rem' }}>
                            <div className="progress-fill" style={{ width: `${pctRemaining}%`, background: 'var(--danger)' }}></div>
                        </div>
                        <div className="text-muted text-xs mt-1" style={{ color: 'var(--danger)' }}>{pctRemaining.toFixed(1)}% of total</div>
                    </div>
                    <div className="card">
                        <h3 className="text-muted text-sm font-bold uppercase mb-2">Finished</h3>
                        <div className="text-3xl font-bold" style={{ marginBottom: '0.5rem', color: '#0f172a' }}>
                            {activeFinished.toLocaleString()}
                        </div>
                        <div className="progress-bg" style={{ marginBottom: '0.5rem' }}>
                            <div className="progress-fill" style={{ width: `${pctFinished}%`, background: 'var(--success)' }}></div>
                        </div>
                        <div className="text-muted text-xs mt-1" style={{ color: 'var(--success)' }}>{pctFinished.toFixed(1)}% of total</div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {/* Main Context: Chart and Live Feed */}
                    <div className="card" style={{ gridColumn: 'span 2' }}>
                        <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
                            <h2 className="font-bold text-lg">Defect Occurrence Trends</h2>
                            <div className="flex gap-2">
                                <span className="badge" style={{ background: '#e0e7ff', color: 'var(--primary)', cursor: 'pointer' }}>Daily</span>
                                <span className="badge" style={{ backgroundColor: 'transparent', color: 'var(--text-muted)', cursor: 'pointer' }}>Weekly</span>
                            </div>
                        </div>

                        <div style={{ width: '100%', height: 250, marginBottom: '2rem' }}>
                            <ResponsiveContainer>
                                <AreaChart data={mockChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorDefects" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--success)" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="var(--success)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} />
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                                    <Tooltip cursor={{ stroke: 'var(--border)', strokeWidth: 1 }} />
                                    <Area type="monotone" dataKey="defects" stroke="var(--primary)" fillOpacity={1} fill="url(#colorDefects)" strokeWidth={3} />
                                    <Area type="monotone" dataKey="resolved" stroke="var(--success)" strokeDasharray="5 5" fillOpacity={1} fill="url(#colorResolved)" strokeWidth={2} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <h2 className="font-bold text-lg" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)', display: 'inline-block' }}></span>
                            Live Feed (Google Sheet Data)
                        </h2>

                        <div className="table-container">
                            {loading ? (
                                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>Loading live data...</div>
                            ) : (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Time / ID</th>
                                            <th>Location / Category</th>
                                            <th>Description</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredDefects.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
                                                    {loading ? "Loading live data..." : "No defects found for the selected filter."}
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredDefects.slice(0, 10).map((d, i) => (
                                                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                                                    <td>
                                                        <div className="font-medium">{d['Time(before)'] || 'N/A'}</div>
                                                        <div className="text-muted text-sm">#{d.ID}</div>
                                                    </td>
                                                    <td>
                                                        <div className="font-medium">{d.Tower} {d.Floor} {d.Room}</div>
                                                        <div className="text-muted text-sm">{d['Work category']}</div>
                                                    </td>
                                                    <td style={{ maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                        {d['Description(E)'] || d['Description(O)']}
                                                    </td>
                                                    <td>
                                                        <span className={getStatusBadgeClass(d.Status)}>
                                                            {d.Status || 'Open'}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <button className="btn-ghost" style={{ padding: '4px' }}><MoreVertical size={16} /></button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            )}
                        </div>

                        <div className="flex justify-between items-center" style={{ marginTop: '1rem' }}>
                            <span className="text-muted text-sm">Showing the latest synced items...</span>
                            <div className="flex gap-2">
                                <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem' }}>&larr;</button>
                                <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem' }}>&rarr;</button>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar: AI Insights and Recent Alerts */}
                    <div>
                        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold">AI Insights</h3>
                                <span className="badge" style={{ background: '#f5f3ff', color: '#7c3aed' }}>94% Confidence</span>
                            </div>
                            <p className="text-sm" style={{ lineHeight: 1.6 }}>
                                <strong>Spike Detected on Nov 15:</strong> An anomaly was logged by Gemini agent concerning structural material degradation.
                                Resolution time is expected to decrease over the next week.
                            </p>
                        </div>

                        <div className="card">
                            <h3 className="font-bold mb-4">Recent Alerts</h3>

                            <div className="flex gap-4" style={{ marginBottom: '1.5rem' }}>
                                <div style={{ marginTop: '4px' }}>
                                    <div style={{ width: 10, height: 10, background: 'var(--danger)', borderRadius: '50%' }}></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-danger">Critical Water Leak</h4>
                                    <p className="text-sm text-muted">Unit 402, Building A</p>
                                    <span className="text-xs text-muted flex items-center gap-1 mt-1"><Clock size={12} /> 2 hours ago</span>
                                </div>
                            </div>

                            <div className="flex gap-4" style={{ marginBottom: '1.5rem' }}>
                                <div style={{ marginTop: '4px' }}>
                                    <div style={{ width: 10, height: 10, background: 'var(--warning)', borderRadius: '50%' }}></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-warning">Material Delay Risk</h4>
                                    <p className="text-sm text-muted">Vendor: Alpha Supplies</p>
                                    <span className="text-xs text-muted flex items-center gap-1 mt-1"><Clock size={12} /> 5 hours ago</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div style={{ marginTop: '4px' }}>
                                    <div style={{ width: 10, height: 10, background: 'var(--success)', borderRadius: '50%' }}></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-success">Inspection Passed</h4>
                                    <p className="text-sm text-muted">Floor 3 Electrical</p>
                                    <span className="text-xs text-muted flex items-center gap-1 mt-1"><Clock size={12} /> 1 day ago</span>
                                </div>
                            </div>

                            <button className="btn btn-outline w-full" style={{ marginTop: '2rem' }}>
                                View All Alerts
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
