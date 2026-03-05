import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Bell, MessageSquare, Search } from 'lucide-react';

export function DashboardNavbar() {
    const location = useLocation();
    const path = location.pathname;
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('q') || '';

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value) {
            setSearchParams({ q: value });
        } else {
            const newParams = new URLSearchParams(searchParams);
            newParams.delete('q');
            setSearchParams(newParams);
        }
    };

    return (
        <nav className="navbar" style={{ padding: '0 2rem' }}>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-8">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                        <div style={{ width: 24, height: 24, background: 'var(--primary)', borderRadius: 4 }}></div>
                        K8 Project
                    </Link>
                    <div className="flex items-center gap-6" style={{ height: '64px' }}>
                        <Link to="/dashboard" className={`nav-link flex items-center h-full ${path.includes('/dashboard') ? 'active' : ''}`} style={path.includes('/dashboard') ? { borderBottom: '2px solid var(--primary)' } : {}}>
                            Dashboard
                        </Link>
                        <a href="https://docs.google.com/spreadsheets/d/1t_feuRxrgQYyKw7PoplyPcyWa73A8lIVq7fHvrLhaIY/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer" className="nav-link flex items-center h-full" style={{ textDecoration: 'none' }}>
                            Defects
                        </a>
                        <Link to="/directory" className={`nav-link flex items-center h-full ${path.includes('/directory') ? 'active' : ''}`} style={path.includes('/directory') ? { borderBottom: '2px solid var(--primary)' } : {}}>
                            Directory
                        </Link>
                        <Link to="/vendors" className={`nav-link flex items-center h-full ${path.includes('/vendors') ? 'active' : ''}`} style={path.includes('/vendors') ? { borderBottom: '2px solid var(--primary)' } : {}}>
                            Vendors
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div style={{ position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: 10, top: 10, color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            style={{
                                padding: '0.5rem 1rem 0.5rem 2.5rem',
                                borderRadius: 'var(--radius-full)',
                                border: '1px solid var(--border)',
                                background: 'var(--bg-color)',
                                outline: 'none',
                                width: '250px'
                            }}
                        />
                    </div>
                    <button className="btn-ghost" style={{ position: 'relative', width: 40, height: 40, borderRadius: '50%' }}>
                        <Bell size={20} />
                        <span style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, background: 'var(--danger)', borderRadius: '50%' }}></span>
                    </button>
                    <button className="btn-ghost" style={{ width: 40, height: 40, borderRadius: '50%' }}>
                        <MessageSquare size={20} />
                    </button>
                    <div className="avatar">AD</div>
                </div>
            </div>
        </nav>
    );
}
