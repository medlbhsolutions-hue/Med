import { useAuth } from '../context/AuthContext';
import AdminDashboard from './dashboards/AdminDashboard';
import ClinicDashboard from './dashboards/ClinicDashboard';
import DoctorDashboard from './dashboards/DoctorDashboard'; // Also used for Patients temporarily

const DashboardPage = () => {
  const { user } = useAuth();

  // If no user is logged in (should be handled by ProtectedRoute, but safe check)
  if (!user) {
    return <div className="flex justify-center items-center h-screen">Chargement...</div>;
  }

  // Dispatch based on role
  switch (user.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'clinic':
      return <ClinicDashboard />;
    case 'doctor':
      return <DoctorDashboard />;
    case 'patient':
      // For now, patients see a simplified view (or repurpose DoctorDashboard)
      return <DoctorDashboard />;
    default:
      // Fallback for unknown roles
      return <DoctorDashboard />;
  }
};

export default DashboardPage;
