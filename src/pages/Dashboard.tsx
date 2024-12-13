import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import PromoCard from '../components/dashboard/PromoCard';
import CryptoCard from '../components/dashboard/CryptoCard';

const cryptoBasket = [
  {
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    name: "Cardano",
    symbol: "ADA",
    description: "Cardano is a blockchain platform for changemakers, innovators, and visionaries, with the tools and technologies required to create possibility for the many.",
    returnRange: "5x-10x"
  },
  {
    logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    name: "Polkadot",
    symbol: "DOT",
    description: "Polkadot unites the world's innovative and changemakers, building and using the most transformative apps and blockchains.",
    returnRange: "5x-10x"
  }
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <PromoCard
            image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107"
            title="Join the 1% list"
            description="of top norch information to build your perfect crypto portfolio which can give you 5x-10-20x return in this Bull Run"
            buttonText="Become Pro Member"
            onClick={() => {}}
          />
          <PromoCard
            image="https://images.unsplash.com/photo-1621416894569-0f39ed31d247"
            title="Stake your USDT"
            description="to get 10% monthly return on regular basis."
            buttonText="Stake USDT"
            onClick={() => {}}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Must Buy Crypto Basket</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {cryptoBasket.map((crypto) => (
              <CryptoCard key={crypto.symbol} {...crypto} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}