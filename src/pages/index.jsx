/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function Home() {

  const [listView, setListView] = React.useState(undefined)

  React.useEffect(() => {

    const list = []
    document.querySelectorAll('.scroll-helper').forEach(element => {
      list
        .push(element.getBoundingClientRect().y)
    })

    if (listView === undefined) {
      setListView(list)
    }


  }, [listView])



  return (
    <div id='page-home' className={poppins.className}>

      <Head>
        <title>
          Home | Peworld
        </title>
      </Head>

      <Navbar />

      <main className='container mx-auto lg:mt-[12vh] max-sm:w-[88%]'>

        {/* hero section */}
        <section id='hero-section' className='scroll-helper grid grid-cols-2 max-md:grid-cols-1 my-20 mt-36 '>

          <div className='flex items-center justify-self-center max-lg:items-center max-w-[40vh]'>
            <div className=''>
              <h1 className='max-sm:text-[5.5vw] max-md:text-[5vw] text-[33px] font-bold'>
                Talenta terbaik negri untuk perubahan revolusi 4.0
              </h1>
              <p className='my-5'>Recruit talenta terbaik sesuai dengan kebutuhan industri.</p>
              <div className='flex gap-2'>
                <button className='rounded-md  font-bold p-3 bg-pw-orange hover:bg-pw-orange-hover text-pw-white'>
                  Hire Sekarang
                </button>
                <button className='rounded-md  font-bold p-3 bg-pw-purple text-pw-white hover:bg-pw-purple-hover'
                  onClick={() => window.scrollTo({ top: listView[1], behavior: 'smooth' })}>
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>

          <div id='bannerImage' className='flex w-[80%] max-lg:items-end max-sm:order-first items-center justify-self-center'>
            <img src='/assets/images/banner.png' alt='banner'></img>
          </div>

        </section>
        {/* End of hero section */}

        {/* Section 2 */}
        <section id='banner-2' className='scroll-helper grid grid-cols-2 max-md:grid-cols-1 my-20'>

          <div className='flex max-lg:items-start items-center justify-self-center max-w-[40vh]'>
            <div>
              <h2>
                <p className='max-sm:text-[5.5vw] max-md:text-[5vw] text-[33px] font-bold max-lg:leading-loose leading-relaxed'>
                  Kenapa harus mencari tallent di
                  <img className='inline max-lg:h-[5vh] pl-3 mt-[-8px] h-12' src='/peworld-purple-wo-bg.svg' alt='peworld' />
                </p>

              </h2>
              <div className='my-5'>
                {
                  [
                    "Talenta terbaik siap didapatkan",
                    "Talenta dengan kemampuan spesifik",
                    "Talenta dengan standar industri",
                    "Talenta disertifikasi dengan standar industri yang ada"
                  ]
                    .map((item, index) => {
                      return (
                        <div key={index} className='flex gap-4 my-3'>
                          <img src='/assets/icons/check-purple.svg' alt='check-pueple' />
                          <p > {item}</p>
                        </div>
                      )
                    })
                }
              </div>
              <div className='flex gap-2'>
                <button className='rounded-md  font-bold p-3 bg-pw-orange hover:bg-pw-orange-hover text-pw-white'>
                  Hire Sekarang
                </button>
                <button className='rounded-md  font-bold p-3 bg-pw-purple text-pw-white hover:bg-pw-purple-hover'
                  onClick={() => window.scrollTo({ top: listView[2], behavior: 'smooth' })}>
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>

          <div id='bannerImage' className='flex w-[80%] max-lg:items-end order-first items-center justify-self-center'>
            <img src='/assets/images/banner_2.png' alt='banner_2'></img>
          </div>

        </section>
        {/* End of Section 2 */}

        {/* Section 3 */}
        <section id='banner-3' className='scroll-helper grid grid-cols-2 max-md:grid-cols-1 my-20'>

          <div className='flex max-lg:items-start items-center justify-self-center max-w-[40vh]'>
            <div>
              <h2 className='max-sm:text-[5.5vw] max-md:text-[5vw] text-[33px] font-bold'>
                Skill Tallent
              </h2>
              <p>
                Hire talent dengan dengan kompetisi yang sesuai.
              </p>
              <div className='my-5 grid grid-cols-2'>
                {
                  [
                    "Java",
                    "kotlin",
                    "PHP",
                    "Javascript",
                    "Golang",
                    "C++",
                    "Ruby",
                    "10+ Bahasa lainnya"
                  ]
                    .map((item, index) => {
                      return (
                        <div key={index} className='flex gap-4 my-3'>
                          <img className='h-[20px]' src='/assets/icons/check-yellow.svg' alt='check-yellow' />
                          <p>{item}</p>
                        </div>
                      )
                    })
                }
              </div>
              <div className='flex gap-2'>
                <button className='rounded-md font-bold p-3 bg-pw-orange hover:bg-pw-orange-hover text-pw-white'>
                  Hire Sekarang
                </button>
              </div>
            </div>
          </div>

          <div id='bannerImage' className='flex w-[80%] max-lg:items-end max-lg:order-first items-center justify-self-center'>
            <img src='/assets/images/banner_3.png' alt='banner_3' />
          </div>

        </section>
        {/* End of Section 3 */}

        {/* CTA */}
        <section className='flex flex-wrap justify-between bg-[url("/assets/images/wave.svg")] bg-right-bottom bg-cover bg-pw-purple mx-10 mt-5 mb-20 p-10
        rounded-tl-[40px] rounded-tr-[10px] rounded-br-[40px] rounded-bl-[10px] max-sm:justify-center'>

          <div className='flex'>
            <p className='max-sm:text-[5.5vw] max-md:text-[5vw] text-[33px] font-bold text-white'>
              Tanpa Ragu, <br />
              Hire Sekarang.
            </p>
          </div>
          <div className='flex justify-center items-center max-sm:my-3 w-auto max-sm:items-center'>
            <button className=' bg-white p-4 rounded-lg'>
              <span className='text-pw-purple font-bold'>Hire Sekarang</span>
            </button>
          </div>
        </section>
        {/* End of CTA */}

      </main>

      <Footer />

    </div>
  )
}
