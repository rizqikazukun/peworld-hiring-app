/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function Home() {

  React.useEffect(() => {

  }, [])

  return (
    <div id='page-home' className={poppins.className}>

      <Head>
        <title>
          Home | Peworld
        </title>
      </Head>

      <Navbar />

      <main className='container mx-auto mt-[15vh]'>
        
        <section className='flex justify-evenly mb-[5vh] flex-wrap'>

          <div className='flex items-center w-[50vh]'>
            <div>
              <h1>
                Talenta terbaik negri untuk perubahan revolusi 4.0                                                       
              </h1>
              <p className='my-8'>Recruit talenta terbaik sesuai dengan kebutuhan industri.</p>
              <button id='banner-button'>
                Mulai Sekarang
              </button>
            </div>
          </div>

          <div id='bannerImage' className='w-[50vh]'>
            <img src='/assets/images/banner.png' alt='banner'></img>
          </div>

        </section>

      </main>

    </div>
  )
}
