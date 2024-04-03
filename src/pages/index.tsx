"use client"
import React, { useState, useEffect } from 'react';
import fetchCamisetas from '@/apis/fetchCamisetas';
import { DataCamisaType } from '@/interfaces/Camisetas';
import CardCamiseta from '@/components/CardCamiseta';
import FiltrosLateral from '@/components/Filtros';
import Ordenacao from '@/components/Ordenacao';

export default function App() {
  // useClient();
  const [camisetas, setCamisetas] = useState<DataCamisaType[]>([]);

  const fetch = async () => {
    const res = await fetchCamisetas() as unknown as DataCamisaType[];
    setCamisetas(res);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">AZ - Camisetas</h2>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Ordenacao />
          <section aria-labelledby="products-heading" className="pb-24 pt-6">

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <FiltrosLateral />
              
              {camisetas.map((camiseta) => (
                <CardCamiseta camiseta={camiseta} />
                ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
