import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupSchema } from '../utils/validation';
import { AuthLayout } from './auth/AuthLayout';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { SocialLogin } from './auth/SocialLogin';

export default function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validData = signupSchema.parse(formData);
      localStorage.setItem('user', JSON.stringify({ ...validData, id: '1' }));
      localStorage.setItem('token', 'dummy-token');
      navigate('/dashboard');
    } catch (error: any) {
      const formattedErrors: Record<string, string> = {};
      error.errors.forEach((err: any) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <AuthLayout title="Signup & Start Making Portfolio">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            error={errors.fullName}
            placeholder="John Doe"
          />
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
          Create Account
        </Button>
      </form>
      
      <SocialLogin type="signup" />
      
      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button
          onClick={() => navigate('/signin')}
          className="font-medium text-teal-600 hover:text-teal-500"
        >
          Log in
        </button>
      </p>
    </AuthLayout>
  );
}