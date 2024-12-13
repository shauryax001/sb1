import React from 'react';
import { Button } from '../ui/Button';

interface PromoCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

export default function PromoCard({ image, title, description, buttonText, onClick }: PromoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full sm:w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0" 
        />
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
          <Button
            onClick={onClick}
            className="mt-4 w-full sm:w-auto"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}