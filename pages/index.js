import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>scong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed overflow-hidden h-screen w-screen -z-1 filter brightness-50 bg-tennis bg-cover bg-center"></div>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-thin text-white">
          Welcome to scong.ca
        </h1>
        
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="https://www.linkedin.com/in/shen-cong-48b15944/">
            <a className="p-8 mt-8 border-2 border-current w-28 rounded-full hover:bg-blue-50 hover:bg-opacity-20 focus:text-blue-300 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </Link>

          <Link href="https://github.com/kevincong">
            <a className="p-8 mt-8 border-2 border-current w-28 rounded-full hover:bg-blue-50 hover:bg-opacity-20 focus:text-blue-300 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </a>
          </Link>

          <Link href="https://www.instagram.com/kevincong/">
            <a className="p-8 mt-8 border-2 border-current w-28 rounded-full hover:bg-blue-50 hover:bg-opacity-20 focus:text-blue-300 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </Link>

          <Link href="https://www.youtube.com/c/ShenCong">
            <a className="p-8 mt-8 border-2 border-current w-28 rounded-full hover:bg-blue-50 hover:bg-opacity-20 focus:text-blue-300 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </a>
          </Link>

          <Link href="https://open.spotify.com/user/kevincong0722">
            <a className="p-8 mt-8 border-2 border-current w-28 rounded-full hover:bg-blue-50 hover:bg-opacity-20 focus:text-blue-300 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </a>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-16">
        <a className="flex text-xs items-center justify-center text-white">Copyright © 2021 | scong</a>
      </footer>

      <style jsx>{`
       
      `}</style>

      <style jsx global>{`

      `}</style>
    </div>
  )
}
