import Navbar from "./navbar";
import Footer from "./footer";
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>        
      <Head>
        <title>Roshan&apos;s portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
