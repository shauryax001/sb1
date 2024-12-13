import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Image section - hidden on mobile, shown on md and up */}
      <div className="hidden md:block md:w-1/2 bg-teal-600">
        <img
          src="https://images.unsplash.com/photo-1589292322384-78e239a03488"
          alt="Relaxing in water"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Form section - full width on mobile, half width on md and up */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}