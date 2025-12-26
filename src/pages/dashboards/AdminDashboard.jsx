import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
    Shield,
    Users,
    Activity,
    Bell,
    Menu,
    Server,
    LogOut,
    Database,
    Lock
} from 'lucide-react';
import '../Dashboard.css';

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const stats = [
        {
            icon: Users,
            label: 'Utilisateurs Totaux',
            value: '2,543',
            trend: '+120 cette semaine',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            icon: Server,
            label: 'Cliniques Actives',
            value: '45',
            trend: '+3 nouvelles',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            icon: Activity,
            label: 'Santé Système',
            value: '99.9%',
            trend: 'Opérationnel',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
    ];

    return (
        <div className="dashboard-container">
            {/* SIDEBAR */}
            <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">Admin Panel</div>
                </div>

                <nav className="sidebar-nav">
                    <div className="nav-item active">
                        <Shield className="nav-icon" />
                        <span>Vue Globale</span>
                    </div>
                    <div className="nav-item">
                        <Users className="nav-icon" />
                        <span>Utilisateurs</span>
                    </div>
                    <div className="nav-item">
                        <Database className="nav-icon" />
                        <span>Données</span>
                    </div>
                    <div className="nav-item">
                        <Lock className="nav-icon" />
                        <span>Sécurité</span>
                    </div>
                </nav>

                <div className="sidebar-footer">
                    <div className="nav-item text-red-500 hover:bg-red-50" onClick={logout}>
                        <LogOut className="nav-icon" />
                        <span>Déconnexion</span>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="flex items-center gap-4 lg:hidden">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <Menu />
                        </button>
                    </div>

                    <div className="header-title hidden lg:block">
                        <h1>Super Admin 👋</h1>
                        <p>Contrôle total de la plateforme.</p>
                    </div>

                    <div className="header-actions">
                        <button className="notification-btn">
                            <Bell size={20} />
                        </button>
                        <div className="user-profile">
                            <div className="user-avatar bg-red-500">AD</div>
                        </div>
                    </div>
                </header>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon-wrapper" style={{ background: stat.gradient }}>
                                <stat.icon size={24} />
                            </div>
                            <div className="stat-content">
                                <h3>{stat.label}</h3>
                                <div className="stat-value">{stat.value}</div>
                                <div className="text-xs text-green-500 font-semibold mt-1">{stat.trend}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="content-grid">
                    <div className="content-card">
                        <div className="card-header">
                            <div className="card-title">Dernières Inscriptions</div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-xl">
                                <p className="text-center text-gray-500">Logs des inscriptions...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
