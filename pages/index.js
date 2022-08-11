import React from 'react';
import Header from '../components/cus_hotel/Header';
import Footer from '../components/cus_hotel/footer';

import Head from "next/head";
 
 export default function index() {
   return (
     <div>
      <Head>
        <title>Hotels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


       <Header />

      <Footer />

     </div>
   )
 }
 

 