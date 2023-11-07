import React from 'react'
import Head from 'next/head'
import { Open_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function Home() {

  React.useEffect(() => {

  }, [])

  return (
    <div className={openSans.className}>

      <Head>
        <title>
          Home | Peworld
        </title>
      </Head>

      <header>
        <Navbar/>
      </header>

      <main>
      </main>

    </div>
  )
}
