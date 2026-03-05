import { DashboardNavbar } from '../components/Navbar';
import { Briefcase, CheckCircle, AlertTriangle, Star, CheckSquare, Clock, ArrowRight } from 'lucide-react';

const mockVendors = [
    { id: 1, name: 'Ricons', category: 'General Construction', status: 'Top Tier', resolution: 95, respTime: '2h', icon: <Briefcase /> },
    { id: 2, name: 'Hyundai elevator', category: 'Elevator', status: 'Review', resolution: 72, respTime: '12h', icon: <Briefcase /> },
    { id: 3, name: 'Eunmin S&D', category: 'Interior', status: 'Excellent', resolution: 90, respTime: '4h', icon: <Briefcase /> },
    { id: 4, name: 'Daeshin', category: 'Mechanical/Plumbing', status: 'At Risk', resolution: 60, respTime: '24h', icon: <Briefcase /> },
];

export default function Vendors() {
    return (
        <div className="h-full flex-col flex" style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '3rem' }}>
            <DashboardNavbar />

            <main className="container" style={{ marginTop: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 className="text-3xl font-bold">Vendor Performance Management</h1>
                    <p className="text-muted text-sm mt-1">Track SLA compliance, response times, and quality of work for all partners.</p>
                </div>

                {/* Top KPI Cards */}
                <div className="grid grid-cols-3 gap-6" style={{ marginBottom: '2rem' }}>
                    <div className="card flex items-center gap-4">
                        <div style={{ background: '#eff6ff', color: 'var(--primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                            <Briefcase size={24} />
                        </div>
                        <div>
                            <div className="text-muted text-sm font-bold uppercase mb-1">Total Active Vendors</div>
                            <div className="text-2xl font-bold flex items-center gap-2">6 <span className="trend-up ml-2">+2%</span></div>
                        </div>
                    </div>
                    <div className="card flex items-center gap-4">
                        <div style={{ background: '#ecfdf5', color: 'var(--success)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                            <CheckCircle size={24} />
                        </div>
                        <div>
                            <div className="text-muted text-sm font-bold uppercase mb-1">Avg Resolution Rate</div>
                            <div className="text-2xl font-bold flex items-center gap-2">87% <span className="trend-up ml-2">+5%</span></div>
                        </div>
                    </div>
                    <div className="card flex items-center gap-4">
                        <div style={{ background: '#fef2f2', color: 'var(--danger)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                            <AlertTriangle size={24} />
                        </div>
                        <div>
                            <div className="text-muted text-sm font-bold uppercase mb-1">Critical Issues Pending</div>
                            <div className="text-2xl font-bold flex items-center gap-2">12 <span className="trend-down ml-2">-3%</span></div>
                        </div>
                    </div>
                </div>

                {/* Partner Performance Cards */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-xl text-primary">Partner Performance Cards</h2>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                    {mockVendors.map(vendor => (
                        <div key={vendor.id} className="card">
                            <div className="flex justify-between items-start mb-4">
                                <div style={{ background: '#e0e7ff', color: 'var(--primary)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                                    {vendor.icon}
                                </div>
                                <span className={`badge ${vendor.status === 'Top Tier' || vendor.status === 'Excellent' ? 'success' : vendor.status === 'At Risk' ? 'danger' : 'warning'}`}>
                                    {vendor.status}
                                </span>
                            </div>
                            <h3 className="font-bold text-lg">{vendor.name}</h3>
                            <p className="text-muted text-sm mb-6">{vendor.category}</p>

                            <div className="mb-4">
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span className="text-muted text-xs uppercase" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <CheckSquare size={14} /> RESOLUTION
                                    </span>
                                    {vendor.resolution}%
                                </div>
                                <div className="progress-bg">
                                    <div className="progress-fill" style={{ width: `${vendor.resolution}%`, background: vendor.resolution >= 90 ? 'var(--success)' : vendor.resolution < 70 ? 'var(--danger)' : 'var(--warning)' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span className="text-muted text-xs uppercase" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Clock size={14} /> RESP. TIME
                                    </span>
                                    {vendor.respTime}
                                </div>
                                <div className="progress-bg">
                                    <div className="progress-fill" style={{ width: vendor.respTime === '2h' ? '90%' : vendor.respTime === '4h' ? '70%' : vendor.respTime === '12h' ? '40%' : '15%', background: vendor.respTime === '2h' ? 'var(--success)' : vendor.respTime === '24h' ? 'var(--danger)' : 'var(--primary)' }}></div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="card flex flex-col items-center justify-center" style={{ border: '2px dashed var(--border)', background: 'transparent' }}>
                        <button className="btn btn-outline" style={{ borderRadius: 'var(--radius-full)' }}>
                            Load More
                        </button>
                        <p className="text-muted text-sm mt-4 text-center">View Other Partners</p>
                    </div>
                </div>

                {/* Recent Defect Logs */}
                <div className="card">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-bold text-xl text-primary">Recent Defect Logs</h2>
                        <a href="#" className="flex items-center gap-1 text-primary font-bold text-sm">
                            View All <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Vendor</th>
                                    <th>Issue Type</th>
                                    <th>Status</th>
                                    <th>AI Analysis</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                    <td className="font-bold">Ricons</td>
                                    <td className="text-muted">Material Delay</td>
                                    <td><span className="badge success">Resolved</span></td>
                                    <td className="text-sm"><Star size={14} className="inline mr-1 text-primary" /> Verified compliant</td>
                                    <td className="text-sm text-muted">Nov 14, 2026</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                    <td className="font-bold">Hyundai elevator</td>
                                    <td className="text-muted">Wiring Expose</td>
                                    <td><span className="badge warning">In Progress</span></td>
                                    <td className="text-sm"><Star size={14} className="inline mr-1 text-primary" /> Part ordered</td>
                                    <td className="text-sm text-muted">Nov 15, 2026</td>
                                </tr>
                                <tr>
                                    <td className="font-bold">Eunmin S&D</td>
                                    <td className="text-muted">Pipe Leaking</td>
                                    <td><span className="badge danger">Pending</span></td>
                                    <td className="text-sm"><Star size={14} className="inline mr-1 text-primary" /> Review required</td>
                                    <td className="text-sm text-muted">Nov 15, 2026</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
