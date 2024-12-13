import React from 'react';
import { Chrome } from 'lucide-react';
import { Button } from '../ui/Button';

interface SocialLoginProps {
  type: 'signin' | 'signup';
}

export function SocialLogin({ type }: SocialLoginProps) {
  return (
    <div className="mt-6 space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>
      <Button variant="secondary" fullWidth className="mt-6">
        <Chrome className="w-5 h-5" />
        <span className="ml-2">{type === 'signin' ? 'Sign in' : 'Sign up'} with Google</span>
      </Button>
    </div>
  );
}