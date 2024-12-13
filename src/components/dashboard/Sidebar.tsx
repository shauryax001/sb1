import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Coins, PlusCircle, Wallet, X } from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="w-64 h-full bg-teal-700 text-white flex flex-col">
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CoinStaX</h1>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md hover:bg-teal-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      <nav className="flex-1 space-y-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-sm ${
              isActive ? 'bg-teal-800' : 'hover:bg-teal-600'
            }`
          }
          onClick={onClose}
        >
          <LayoutDashboard className="w-5 h-5 mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to="/portfolio/create"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-sm ${
              isActive ? 'bg-teal-800' : 'hover:bg-teal-600'
            }`
          }
          onClick={onClose}
        >
          <PlusCircle className="w-5 h-5 mr-3" />
          Portfolio Create
        </NavLink>
        <NavLink
          to="/coins"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-sm ${
              isActive ? 'bg-teal-800' : 'hover:bg-teal-600'
            }`
          }
          onClick={onClose}
        >
          <Coins className="w-5 h-5 mr-3" />
          Coin List
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-sm ${
              isActive ? 'bg-teal-800' : 'hover:bg-teal-600'
            }`
          }
          onClick={onClose}
        >
          <Wallet className="w-5 h-5 mr-3" />
          My Portfolio
        </NavLink>
      </nav>
    </div>
  );
}