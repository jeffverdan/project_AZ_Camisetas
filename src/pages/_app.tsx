import type { AppProps } from 'next/app'
import "../styles/globals.css";
import GlobalHeader from '@/components/Header';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalHeader />
      <Component {...pageProps} />
    </>
  )
}