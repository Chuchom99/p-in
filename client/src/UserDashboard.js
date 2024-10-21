import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from './authcontext/authContext';
import Dashboard from './pages/userDashboard/UserDashbord';
import Admin from "./pages/admin/Admin"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import InvestorTransaction from "./components/investorTransactions/InvestorTransaction";



function UserDashboard() {
  const { currentUser } = useContext(AuthContext);
  // const navigate = Navigate()
  
  const queryClient = new QueryClient()
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    } else if (currentUser.is_admin === 1 ) {
      return <Navigate to="/admin" />;
    } else {
      return children;
    }
  };


  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <ProtectedRoute>
        <div>
          {currentUser.is_admin === 1 ? <Admin /> : <Dashboard />}
        </div>
      </ProtectedRoute>
    </div>
    </QueryClientProvider>
  );
}

export default UserDashboard;

