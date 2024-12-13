import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signinSchema } from '../utils/validation';
import { AuthLayout } from './auth/AuthLayout';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { SocialLogin } from './auth/SocialLogin';

export default function SigninForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validData = signinSchema.parse(formData);
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === validData.email) {
          localStorage.setItem('token', 'dummy-token');
          navigate('/dashboard');
        } else {
          setErrors({ auth: 'Invalid email or password' });
        }
      } else {
        setErrors({ auth: 'User not found' });
      }
    } catch (error: any) {
      const formattedErrors: Record<string, string> = {};
      error.errors.forEach((err: any) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <AuthLayout title="Sign In & Start Making Portfolio">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {errors.auth && (
          <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {errors.auth}
          </div>
        )}
        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            placeholder="john@example.com"
          />
          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            error={errors.password}
            placeholder="••••••••"
          />
        </div>

        <Button type="submit" fullWidth>
          Sign In
        </Button>
      </form>

      <SocialLogin type="signin" />

      <p className="mt-6 text-center text-sm text-gray-600">
        Your are new here?{' '}
        <button
          onClick={() => navigate('/signup')}
          className="font-medium text-teal-600 hover:text-teal-500"
        >
          Sign Up
        </button>
      </p>
    </AuthLayout>
  );
}