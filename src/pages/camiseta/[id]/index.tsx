// pages/camiseta/[id].js
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import DetalhesCamiseta from '@/CardCamiseta'
import { GetServerSideProps } from 'next'
import getCamiseta from '@/apis/getCamiseta'
import { DataCamisaType } from '@/interfaces/Camisetas'
import DetalhesCamiseta from '@/components/DetalhesCamisa'

const CamisetaPage = ({ id }: { id: string }) => {
  const [camiseta, setCamiseta] = useState<DataCamisaType>()

  const fetch = async () => {
    const res = await getCamiseta({ id }) as unknown as DataCamisaType;
    setCamiseta(res);
  };

  useEffect(() => {
    fetch();
  }, []);


  return (
    <div className="container mx-auto p-4">
      {camiseta ? (
        <DetalhesCamiseta camiseta={camiseta} />        
      ) : (
        ''
      )}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  return { props: { id } };
};

export default CamisetaPage
