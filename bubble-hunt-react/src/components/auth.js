import React , { useEffect, useState } from 'react';
import app from './base';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, serCurrentUser ] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(serCurrentUser);
    }, [])

    return (
        <AuthContext.Provider
        vlaue={{
            currentUser
        }}
        >
            {children}
        </AuthContext.Provider>
    )
};
