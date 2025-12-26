import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import ProfileSection from '../../components/dashboard/ProfileSection';
import AppointmentsSection from '../../components/dashboard/AppointmentsSection';
import logo from '../../assets/images/logo-premium.png';
import {
    Users,
    Calendar,
    FileText,
    Search,
    Bell,
    Menu,
    Home,
    LogOut,
    ChevronRight,
    Stethoscope,
    Clock,
    User
} from 'lucide-react';
import '../Dashboard.css';

const DoctorDashboard = () => {
    const { user, logout } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    const stats = [
        {
            icon: Users,
            label: 'Mes Patients',
            value: '124',
            trend: '+4%',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            icon: Calendar,
            label: 'RDV Aujourd\'hui',
            value: '8',
            trend: 'Planning complet',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            icon: Clock,
            label: 'Heures Consult.',
            value: '34h',
            trend: 'Cette semaine',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
    ];

    // Render content based on active section
    const renderContent = () => {
        switch (activeSection) {
            case 'profile':
                return <ProfileSection />;
            case 'appointments':
                return <AppointmentsSection />;
            case 'overview':
            default:
                return (
                    <>
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
                                    <div className="card-title">Prochains Patients</div>
                                </div>
                                <div className="space-y-4">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                                    <Stethoscope size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800">Consultation {item}</h4>
                                                    <p className="text-sm text-gray-500">14:30 • Motif: Contrôle</p>
                                                </div>
                                            </div>
                                            <ChevronRight className="text-gray-400 group-hover:text-primary" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                );
        }
    };

    // Dynamic Header Title
    const getHeaderTitle = () => {
        switch (activeSection) {
            case 'profile': return { title: 'Mon Profil', subtitle: 'Gérez vos informations personnelles.' };
            case 'appointments': return { title: 'Mon Agenda', subtitle: 'Gérez vos rendez-vous et disponibilités.' };
            default: return { title: `Dr. ${user?.name || 'Médecin'} 👋`, subtitle: 'Prêt pour vos consultations du jour ?' };
        }
    };

    const headerInfo = getHeaderTitle();

    return (
        <div className="dashboard-container">
            {/* SIDEBAR */}
            <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <img src={logo} alt="MedLBH Logo" className="sidebar-logo-img" />
                </div>

                <nav className="sidebar-nav">
                    <div
                        className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveSection('overview')}
                    >
                        <Home className="nav-icon" />
                        <span>Vue d'ensemble</span>
                    </div>
                    <div
                        className={`nav-item ${activeSection === 'appointments' ? 'active' : ''}`}
                        onClick={() => setActiveSection('appointments')}
                    >
                        <Calendar className="nav-icon" />
                        <span>Mon Agenda</span>
                    </div>
                    <div className="nav-item">
                        <Users className="nav-icon" />
                        <span>Mes Patients</span>
                    </div>
                    <div className="nav-item">
                        <FileText className="nav-icon" />
                        <span>Dossiers Médicaux</span>
                    </div>
                    <div
                        className={`nav-item ${activeSection === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveSection('profile')}
                    >
                        <User className="nav-icon" />
                        <span>Mon Profil</span>
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
                        <h1>{headerInfo.title}</h1>
                        <p>{headerInfo.subtitle}</p>
                    </div>

                    <div className="header-actions">
                        <button className="notification-btn">
                            <Bell size={20} />
                            <span className="notification-badge"></span>
                        </button>
                        <div className="user-profile" onClick={() => setActiveSection('profile')}>
                            <div className="user-avatar font-bold text-sm">
                                {user?.name ? user.name.charAt(0).toUpperCase() : 'D'}
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-bold text-gray-800">{user?.name || 'Dr. Utilisateur'}</p>
                                <p className="text-xs text-gray-500 capitalize">{user?.role || 'Docteur'}</p>
                            </div>
                        </div>
                    </div>
                </header>

                {renderContent()}

            </main>
        </div>
    );
};

export default DoctorDashboard;
