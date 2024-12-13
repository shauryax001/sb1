import React from 'react';

interface CryptoCardProps {
  logo: string;
  name: string;
  symbol: string;
  description: string;
  returnRange: string;
}

export default function CryptoCard({ logo, name, symbol, description, returnRange }: CryptoCardProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        <img 
          src={logo} 
          alt={name} 
          className="w-16 h-16 mx-auto sm:mx-0" 
        />
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-gray-500">{symbol}</p>
            </div>
            <div className="mt-2 sm:mt-0 text-center sm:text-right">
              <div className="text-sm text-gray-600">Return Accepted:</div>
              <div className="font-medium text-teal-600">{returnRange}</div>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
          <button className="mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
}