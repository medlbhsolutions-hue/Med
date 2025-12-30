import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import ProfileSection from '../../components/dashboard/ProfileSection';
import AppointmentsSection from '../../components/dashboard/AppointmentsSection';
import ClinicsManagementSection from '../../components/dashboard/ClinicsManagementSection';
import logo from '../../assets/images/logo-premium.png';
import {
    Shield,
    Users,
    Activity,
    Settings,
    Bell,
    Menu,
    Home,
    LogOut,
    Database,
    Lock,
    UserCheck,
    Calendar,
    Building2 // Added Building2 icon
} from 'lucide-react';
import '../Dashboard.css';

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    const stats = [
        {
            icon: Users,
            label: 'Utilisateurs Totaux',
            value: '2,543',
            trend: '+12% ce mois',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            icon: Activity,
            label: 'Système Satus',
            value: '99.9%',
            trend: 'Opérationnel',
            gradient: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)'
        },
        {
            icon: Database,
            label: 'Volume Données',
            value: '45 GB',
            trend: 'Backup OK',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
    ];

    // Mock User Management Section
    const UserManagementSection = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Gestion des Utilisateurs</h2>
                    <p className="text-gray-500">Administrez les comptes médecins et cliniques</p>
                </div>
                <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-blue-300 transition">+ Ajouter</button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 text-sm font-semibold text-gray-600">Utilisateur</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Role</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3, 4].map(i => (
                            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                                <td className="p-4 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                    <span className="font-medium text-gray-800">Utilisateur {i}</span>
                                </td>
                                <td className="p-4 text-sm text-gray-500">Médecin</td>
                                <td className="p-4"><span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">Actif</span></td>
                                <td className="p-4 text-blue-600 cursor-pointer font-medium text-sm">Éditer</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSection) {
            case 'profile':
                return <ProfileSection />;
            case 'clinics': // Added case
                return <ClinicsManagementSection />;
            case 'users':
                return <UserManagementSection />;
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
                                    <div className="card-title">Logs de Sécurité</div>
                                </div>
                                <div className="space-y-4">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <Lock size={16} className="text-red-500" />
                                                <span className="text-sm text-gray-700 font-medium">Tentative de connexion échouée (IP: 192.168.1.{item})</span>
                                            </div>
                                            <span className="text-xs text-gray-500">Il y a {item}h</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                );
        }
    };

    const getHeaderTitle = () => {
        switch (activeSection) {
            case 'profile': return { title: 'Profil Administrateur', subtitle: 'Sécurité du compte racine.' };
            case 'clinics': return { title: 'Gestion des Partenaires', subtitle: 'Ajoutez ou modifiez les cliniques du réseau.' };
            case 'users': return { title: 'Utilisateurs', subtitle: 'Gestion globale des comptes.' };
            case 'appointments': return { title: 'Gestion des Rendez-vous', subtitle: 'Suivi des demandes et planning.' };
            default: return { title: 'Administration Système', subtitle: 'Vue globale de la plateforme.' };
        }
    }
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
                    {/* Added Appointments Nav Item */}
                    <div
                        className={`nav-item ${activeSection === 'appointments' ? 'active' : ''}`}
                        onClick={() => setActiveSection('appointments')}
                    >
                        <Calendar className="nav-icon" />
                        <span>Rendez-vous</span>
                    </div>
                    {/* Added Clinics Nav Item */}
                    <div
                        className={`nav-item ${activeSection === 'clinics' ? 'active' : ''}`}
                        onClick={() => setActiveSection('clinics')}
                    >
                        <Building2 className="nav-icon" />
                        <span>Cliniques</span>
                    </div>
                    <div
                        className={`nav-item ${activeSection === 'users' ? 'active' : ''}`}
                        onClick={() => setActiveSection('users')}
                    >
                        <Users className="nav-icon" />
                        <span>Utilisateurs</span>
                    </div>
                    <div className="nav-item">
                        <Activity className="nav-icon" />
                        <span>Monitoring</span>
                    </div>
                    <div className="nav-item">
                        <Settings className="nav-icon" />
                        <span>Paramètres Globaux</span>
                    </div>
                    <div
                        className={`nav-item ${activeSection === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveSection('profile')}
                    >
                        <Shield className="nav-icon" />
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
                            <div className="user-avatar bg-red-500 text-white">
                                A
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-bold text-gray-800">Admin</p>
                                <p className="text-xs text-gray-500">Super User</p>
                            </div>
                        </div>
                    </div>
                </header>

                {renderContent()}

            </main>
        </div>
    );
};

export default AdminDashboard;
