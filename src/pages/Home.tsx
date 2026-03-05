import { Link } from 'react-router-dom';
import { ArrowRight, Bot, CheckCircle, Clock, ShieldCheck, MessageSquare } from 'lucide-react';

export default function Home() {
    return (
        <div style={{ minHeight: '100vh', background: 'var(--surface)', color: 'var(--text-main)', fontFamily: 'Inter, sans-serif' }}>
            {/* Navbar specific to Home */}
            <nav className="navbar" style={{ padding: '0 4rem', justifyContent: 'space-between', borderBottom: 'none' }}>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 font-bold text-xl text-primary">
                        <div style={{ width: 24, height: 24, background: 'var(--primary)', borderRadius: 4 }}></div>
                        K8 Project
                    </div>
                    <div className="flex gap-6 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                    </div>
                </div>
                <Link to="/dashboard" className="btn btn-primary" style={{ borderRadius: 'var(--radius-full)' }}>Your Dream Our space</Link>
            </nav>

            {/* Hero Section */}
            <main className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', background: '#e0e7ff', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem' }}>
                    v2.0 Now Available
                </div>
                <h1 style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.1, color: '#0f172a' }}>
                    AI Agent Construction<br />Management
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
                    Automate defect reporting, task routing, and resolution tracking securely and efficiently from site to report.
                </p>

                <div className="flex justify-center gap-4">
                    <Link to="/dashboard" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.125rem' }}>
                        AI agent construction management <ArrowRight size={20} />
                    </Link>
                </div>

                {/* Tech Cards */}
                <div className="grid grid-cols-3 gap-6" style={{ marginTop: '5rem', textAlign: 'left' }}>
                    <div className="card" style={{ background: 'linear-gradient(135deg, #f8fafc, #ffffff)' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" width="32" height="32" alt="Google Gemini" style={{ marginBottom: '1rem' }} />
                        <h3 className="font-bold text-lg" style={{ marginBottom: '0.5rem' }}>Gemini Vision</h3>
                        <p className="text-muted text-sm">Advanced visual and linguistic defect analysis, providing precise context.</p>
                    </div>
                    <div className="card" style={{ background: 'linear-gradient(135deg, #f8fafc, #ffffff)' }}>
                        <img src="https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" width="80" height="32" alt="n8n" style={{ marginBottom: '1rem', objectFit: 'contain' }} />
                        <h3 className="font-bold text-lg" style={{ marginBottom: '0.5rem' }}>n8n Automation</h3>
                        <p className="text-muted text-sm">Design seamless workflows automating every step from capture to record.</p>
                    </div>
                    <div className="card" style={{ background: 'linear-gradient(135deg, #f8fafc, #ffffff)' }}>
                        <div style={{ fontSize: '20px', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-1px', color: '#111827', marginBottom: '1rem', display: 'flex', alignItems: 'center', height: '32px' }}>
                            ANTIGRAVITY
                        </div>
                        <h3 className="font-bold text-lg" style={{ marginBottom: '0.5rem' }}>Antigravity Sync</h3>
                        <p className="text-muted text-sm">Real-time data synchronization with your core management solutions.</p>
                    </div>
                </div>

                {/* Expected Effects Section */}
                <div style={{ padding: '8rem 0', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', background: '#f8fafc', color: '#475569', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem' }}>
                        Expected Effects
                    </div>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        5 Ways We Transform Your Experience
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '8rem' }}>Experience a new standard of automated construction management.</p>

                    <div className="flex flex-col gap-32 max-w-6xl mx-auto px-6">
                        {/* Section 1 */}
                        <div className="flex items-center gap-16 text-left" style={{ minHeight: '400px' }}>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ background: '#f8fafc', padding: '5rem', borderRadius: '4rem', border: '1px solid var(--border)' }}>
                                    <Bot size={100} color="#0f172a" strokeWidth={1} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ color: 'var(--text-muted)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Feature 01</div>
                                <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>AI-Agent Management</h3>
                                <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '2rem' }}>24/7 Seamless Automation</p>
                                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>An always-on AI agent flawlessly manages your entire workflow from initial reporting to final tracking in real-time, 24/7 without interruption.</p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="flex items-center gap-16 text-left flex-row-reverse" style={{ minHeight: '400px' }}>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ background: '#f8fafc', padding: '5rem', borderRadius: '4rem', border: '1px solid var(--border)' }}>
                                    <CheckCircle size={100} color="#0f172a" strokeWidth={1} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ color: 'var(--text-muted)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Feature 02</div>
                                <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Eliminate Human Error</h3>
                                <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '2rem' }}>Translation & Data Organization</p>
                                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>Eliminates critical human errors and maintains high data accuracy through automated multilingual translation and intelligent data classification.</p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="flex items-center gap-16 text-left" style={{ minHeight: '400px' }}>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ background: '#f8fafc', padding: '5rem', borderRadius: '4rem', border: '1px solid var(--border)' }}>
                                    <Clock size={100} color="#0f172a" strokeWidth={1} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ color: 'var(--text-muted)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Feature 03</div>
                                <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Massive Time Saving</h3>
                                <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '2rem' }}>Rapid Aggregation & Response</p>
                                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>Instantly aggregates massive amounts of scattered data, drastically reducing the time spent on repetitive, manual administrative tasks.</p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="flex items-center gap-16 text-left flex-row-reverse" style={{ minHeight: '400px' }}>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ background: '#f8fafc', padding: '5rem', borderRadius: '4rem', border: '1px solid var(--border)' }}>
                                    <ShieldCheck size={100} color="#0f172a" strokeWidth={1} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ color: 'var(--text-muted)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Feature 04</div>
                                <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Quality Upgrade</h3>
                                <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '2rem' }}>Pushing for Zero Defects</p>
                                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>Ultimately ensures near-flawless construction quality through precise AI-driven root cause analysis and proactive, tight follow-up actions.</p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="flex items-center gap-16 text-left" style={{ minHeight: '400px' }}>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ background: '#f8fafc', padding: '5rem', borderRadius: '4rem', border: '1px solid var(--border)' }}>
                                    <MessageSquare size={100} color="#0f172a" strokeWidth={1} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ color: 'var(--text-muted)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Feature 05</div>
                                <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Seamless Communication</h3>
                                <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '2rem' }}>Interactive Support & Collaboration</p>
                                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>Fosters mutual trust by providing a barrier-free communication environment among clients, contractors, and all sub-contractors on site.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <p>&copy; 2026 K8 Project | AI Management. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
