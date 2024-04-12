"use client"
import React, { useState, useEffect } from 'react';
import fetchCamisetas from '@/apis/fetchCamisetas';
import { DataCamisaType, filterType } from '@/interfaces/Camisetas';
import CardCamiseta from '@/components/CardCamiseta';
import FiltrosLateral from '@/components/Filtros';
import Ordenacao from '@/components/Ordenacao';

interface FetchApiCamisas {
  camisetas: DataCamisaType[]
  filtros: {
    genero: filterType,
    tamanho: filterType
  }
}

export default function App() {
  // useClient();
  const [camisetas, setCamisetas] = useState<DataCamisaType[]>([]);
  const [filtros, setFiltros] = useState({});

  const fetch = async () => {
    const res = await fetchCamisetas() as unknown as FetchApiCamisas;
    setCamisetas(res.camisetas);
    setFiltros(res.filtros);
  }

  useEffect(() => {
    fetch();
  }, []);

  console.log(filtros);  

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">AZ - Camisetas</h2>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Ordenacao />
          <section aria-labelledby="products-heading" className="pb-24 pt-6">

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <FiltrosLateral filtros={filtros} setCamisetas={setCamisetas} />
              
              {camisetas.map((camiseta) => (
                <CardCamiseta key={camiseta.id} camiseta={camiseta} />
                ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
