import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/auth';

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // In a real app, verify token and fetch user data
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
        setIsAuthenticated(true);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}