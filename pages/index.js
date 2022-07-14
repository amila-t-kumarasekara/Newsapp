import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Section  from '../components/section';
import Footer from "../components/footer";
import Sec from '../components/section2';

export default function Home() {
  return (
    <div>
      <head>
        <title>News Here</title>
        <meta name='description' content='News App for demo'/>
        <link rel='icon' href='/public/favicon.ico'/>
      </head>
      <Navbar />
      <Section />
      <Sec />
      <Footer />
    </div>
  );
}
