import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import ProfileSection from '../../components/dashboard/ProfileSection';
import logo from '../../assets/images/logo-premium.png';
import {
    Building2,
    Users,
    Stethoscope,
    TrendingUp,
    Bell,
    Menu,
    Home,
    LogOut,
    UserPlus,
    Briefcase,
    DollarSign
} from 'lucide-react';
import '../Dashboard.css';

const ClinicDashboard = () => {
    const { user, logout } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    const stats = [
        {
            icon: Users,
            label: 'Personnel Total',
            value: '42',
            trend: '+2 recrus',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            icon: Stethoscope,
            label: 'Médecins Actifs',
            value: '18',
            trend: '98% dipo',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            icon: DollarSign,
            label: 'Revenus Mensuels',
            value: '124k€',
            trend: '+12% vs N-1',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
    ];

    // Contenu spécifique pour le recrutement (Mock)
    const RecruitmentSection = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Offres d'emploi</h2>
                    <p className="text-gray-500">Gérez vos recrutements en cours</p>
                </div>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-blue-300 transition hover:-translate-y-1">
                    <UserPlus size={18} />
                    Publier une offre
                </button>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm min-h-[300px] flex items-center justify-center text-gray-400">
                <div className="text-center">
                    <Briefcase size={48} className="mx-auto mb-3 opacity-50" />
                    <p>Aucune campagne de recrutement active.</p>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSection) {
            case 'profile':
                return <ProfileSection />;
            case 'recruitment':
                return <RecruitmentSection />;
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
                                    <div className="card-title">Candidatures Récentes</div>
                                </div>
                                <div className="space-y-4">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                                                    <UserPlus size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800">Candidat #{item}</h4>
                                                    <p className="text-sm text-gray-500">Poste: Infirmier • Il y a 2h</p>
                                                </div>
                                            </div>
                                            <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">En attente</span>
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
            case 'profile': return { title: 'Profil de la Clinique', subtitle: 'Informations et paramètres du compte.' };
            case 'recruitment': return { title: 'Recrutement', subtitle: 'Trouvez vos futurs talents.' };
            default: return { title: `Bonjour, ${user?.name || 'Directeur'}`, subtitle: 'Aperçu de votre établissement.' };
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
                        className={`nav-item ${activeSection === 'recruitment' ? 'active' : ''}`}
                        onClick={() => setActiveSection('recruitment')}
                    >
                        <UserPlus className="nav-icon" />
                        <span>Recrutement</span>
                    </div>
                    <div className="nav-item">
                        <Users className="nav-icon" />
                        <span>Mon Équipe</span>
                    </div>
                    <div className="nav-item">
                        <TrendingUp className="nav-icon" />
                        <span>Performance</span>
                    </div>
                    <div
                        className={`nav-item ${activeSection === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveSection('profile')}
                    >
                        <Building2 className="nav-icon" />
                        <span>Profil Clinique</span>
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
                            {/* Avatar spécifique Clinique */}
                            <div className="user-avatar bg-gradient-to-br from-green-400 to-teal-500">
                                {user?.clinicName ? user.clinicName.charAt(0).toUpperCase() : 'C'}
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-bold text-gray-800">{user?.clinicName || user?.name || 'Nom Clinique'}</p>
                                <p className="text-xs text-gray-500">Gestionnaire</p>
                            </div>
                        </div>
                    </div>
                </header>

                {renderContent()}

            </main>
        </div>
    );
};

export default ClinicDashboard;
