import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
    Building2,
    Users,
    TrendingUp,
    Search,
    Bell,
    Menu,
    LayoutDashboard,
    LogOut,
    UserPlus,
    Wallet
} from 'lucide-react';
import '../Dashboard.css';

const ClinicDashboard = () => {
    const { user, logout } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const stats = [
        {
            icon: Users,
            label: 'Total Médecins',
            value: '12',
            trend: '2 en attente',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            icon: Users,
            label: 'Total Patients',
            value: '1,450',
            trend: '+15% ce mois',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            icon: Wallet,
            label: 'Revenus Clinique',
            value: '45.2k €',
            trend: '+8%',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
    ];

    return (
        <div className="dashboard-container">
            {/* SIDEBAR */}
            <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">MedLBH</div>
                </div>

                <nav className="sidebar-nav">
                    <div className="nav-item active">
                        <LayoutDashboard className="nav-icon" />
                        <span>Vue Clinique</span>
                    </div>
                    <div className="nav-item">
                        <Building2 className="nav-icon" />
                        <span>Gestion Équipe</span>
                    </div>
                    <div className="nav-item">
                        <TrendingUp className="nav-icon" />
                        <span>Finances</span>
                    </div>
                    <div className="nav-item">
                        <UserPlus className="nav-icon" />
                        <span>Recrutement</span>
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
                        <h1>Clinique {user?.clinicName || 'Santé'} 👋</h1>
                        <p>Gestion de votre établissement.</p>
                    </div>

                    <div className="header-actions">
                        <button className="notification-btn">
                            <Bell size={20} />
                        </button>
                        <div className="user-profile">
                            <div className="user-avatar">CL</div>
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
                            <div className="card-title">Médecins Actifs</div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-xl">
                                <p className="text-center text-gray-500">Liste des médecins de la clinique...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ClinicDashboard;
