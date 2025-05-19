import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const isLoged = localStorage.getItem('isLoged') === 'true';

    if (!isLoged) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default PrivateRoute;