import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DashboardNavbar } from '../components/Navbar';
import { Phone, Mail, MoreVertical, ExternalLink, UserPlus } from 'lucide-react';

const mockContacts = [
    { id: 1, name: 'Alice Smith', title: 'Lead Architect', team: 'Developer Team', company: 'K8 Project', email: 'alice.smith@k8project.com', phone: '+1 234-567-8901', avatar: 'AS' },
    { id: 2, name: 'Bob Johnson', title: 'Site Manager', team: 'Construction Managers', company: 'K8 Project', email: 'bjohnson@k8project.com', phone: '+1 234-567-8902', avatar: 'BJ' },
    { id: 3, name: 'Carol Williams', title: 'Structural Engineer', team: 'Developer Team', company: 'K8 Project', email: 'cwilliams@k8project.com', phone: '+1 234-567-8903', avatar: 'CW' },
    { id: 4, name: 'David Brown', title: 'Safety Inspector', team: 'Construction Managers', company: 'K8 Project', email: 'dbrown@k8project.com', phone: '+1 234-567-8904', avatar: 'DB' },

    // Ricons
    { id: 5, name: 'Nguyen Van A', title: 'Project Manager', team: 'Sub-contractor', company: 'Ricons', email: 'nva@ricons.vn', phone: '+84 901-234-567', avatar: 'NV' },
    { id: 6, name: 'Tran Thi B', title: 'Site Engineer', team: 'Sub-contractor', company: 'Ricons', email: 'ttb@ricons.vn', phone: '+84 902-345-678', avatar: 'TT' },
    { id: 7, name: 'Le Van C', title: 'QA/QC Engineer', team: 'Sub-contractor', company: 'Ricons', email: 'lvc@ricons.vn', phone: '+84 903-456-789', avatar: 'LV' },

    // Eunmin S&D
    { id: 8, name: 'Kim Min-su', title: 'Interior Design Lead', team: 'Sub-contractor', company: 'Eunmin S&D', email: 'minsu.k@eunmin.co.kr', phone: '+82 10-1234-5678', avatar: 'KM' },
    { id: 9, name: 'Park Ji-hoon', title: 'Site Supervisor', team: 'Sub-contractor', company: 'Eunmin S&D', email: 'jh.park@eunmin.co.kr', phone: '+82 10-2345-6789', avatar: 'PJ' },
    { id: 10, name: 'Lee Seo-yeon', title: 'Procurement Specialist', team: 'Sub-contractor', company: 'Eunmin S&D', email: 'sy.lee@eunmin.co.kr', phone: '+82 10-3456-7890', avatar: 'LS' },

    // Hyundai Elevator
    { id: 11, name: 'Choi Jung-woo', title: 'Installation Manager', team: 'Sub-contractor', company: 'Hyundai Elevator', email: 'jw.choi@hyundaielevator.co.kr', phone: '+82 10-4567-8901', avatar: 'CJ' },
    { id: 12, name: 'Kang Tae-oh', title: 'Electrical Engineer', team: 'Sub-contractor', company: 'Hyundai Elevator', email: 'to.kang@hyundaielevator.co.kr', phone: '+82 10-5678-9012', avatar: 'KT' },
    { id: 13, name: 'Yoon Ah-reum', title: 'Safety Coordinator', team: 'Sub-contractor', company: 'Hyundai Elevator', email: 'ar.yoon@hyundaielevator.co.kr', phone: '+82 10-6789-0123', avatar: 'YA' },

    // Daeshin
    { id: 14, name: 'Jung Ho-seok', title: 'Civil Engineer', team: 'Sub-contractor', company: 'Daeshin', email: 'hs.jung@daeshin.com', phone: '+82 10-7890-1234', avatar: 'JH' },
    { id: 15, name: 'Song Min-ho', title: 'Plumbing Specialist', team: 'Sub-contractor', company: 'Daeshin', email: 'mh.song@daeshin.com', phone: '+82 10-8901-2345', avatar: 'SM' },
    { id: 16, name: 'Hwang Bo-ra', title: 'Logistics Manager', team: 'Sub-contractor', company: 'Daeshin', email: 'br.hwang@daeshin.com', phone: '+82 10-9012-3456', avatar: 'HB' },
];

export default function Directory() {
    const [activeTab, setActiveTab] = useState('All Contacts');
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('q')?.toLowerCase() || '';
    const tabs = ['All Contacts', 'Developer Team', 'Construction Managers', 'Sub-contractor'];

    const filteredContacts = mockContacts.filter(c => {
        const matchesTab = activeTab === 'All Contacts' || c.team === activeTab;
        const matchesSearch = c.name.toLowerCase().includes(searchQuery);
        return matchesTab && matchesSearch;
    });

    return (
        <div className="h-full flex-col flex" style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '3rem' }}>
            <DashboardNavbar />

            <main className="container" style={{ marginTop: '2rem' }}>
                <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
                    <div>
                        <h1 className="text-3xl font-bold">Organization & Contact Directory</h1>
                        <p className="text-muted text-sm mt-1">Manage project team, roles, and quick access contact information.</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://docs.google.com/spreadsheets/d/1vFM9ECN5LQoPa9S5a3KohO_BmFdpQx2zG1ZxwH-k0h8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderRadius: 'var(--radius-full)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <ExternalLink size={18} /> View
                        </a>
                        <button className="btn btn-primary" style={{ borderRadius: 'var(--radius-full)' }}>
                            <UserPlus size={18} /> Add Contact
                        </button>
                    </div>
                </div>

                <div className="tabs">
                    {tabs.map(tab => (
                        <div
                            key={tab}
                            className={`tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-lg flex items-center gap-2">
                        {activeTab} {searchQuery && <span className="text-sm font-normal text-muted ml-2">(Search: "{searchQuery}")</span>}
                        <span className="badge" style={{ background: '#e0e7ff', color: 'var(--primary)' }}>
                            {filteredContacts.length} Members
                        </span>
                    </h2>
                </div>

                {filteredContacts.length === 0 ? (
                    <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                        No contacts found for "{searchQuery}".
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-6">
                        {filteredContacts.map(contact => (
                            <div key={contact.id} className="card" style={{ padding: '1.5rem 1rem' }}>
                                <div className="flex justify-between border-b pb-4 mb-4" style={{ borderColor: 'var(--border)' }}>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar" style={{ width: 48, height: 48, background: '#e0e7ff', color: 'var(--primary)' }}>
                                            {contact.avatar}
                                        </div>
                                        <div>
                                            <h3 className="font-bold">{contact.name}</h3>
                                            <p className="text-sm text-primary">{contact.title}</p>
                                            <p className="text-xs text-muted" style={{ marginTop: '2px' }}>{contact.company}</p>
                                        </div>
                                    </div>
                                    <button className="btn-ghost" style={{ padding: '4px' }}><MoreVertical size={16} /></button>
                                </div>

                                <div className="flex flex-col gap-3 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-muted">
                                        <Mail size={16} /> {contact.email}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted">
                                        <Phone size={16} /> {contact.phone}
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button className="btn btn-outline w-full justify-center">
                                        <Phone size={16} /> Call
                                    </button>
                                    <button className="btn btn-outline w-full justify-center">
                                        <Mail size={16} /> Email
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
