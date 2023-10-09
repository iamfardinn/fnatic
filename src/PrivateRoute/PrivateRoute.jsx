
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const {user, loading} = useAuth();


       if (loading) return <h1 className="text-4xl">Wait a Bit</h1>
  if (!user?.email) {
        return <Navigate to='/login' />
    }

 return children;
};

export default PrivateRoute;