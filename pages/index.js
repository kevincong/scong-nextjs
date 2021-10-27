import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-800">
      <Head>
        <title>scong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-thin dark:text-white">
          Welcome to scong.ca
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {/* <Link href="/resume">
            <a className="p-8 mt-8 border border-current w-32 rounded-full dark:hover:text-blue-50 hover:text-gray-700 focus:text-blue-200 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.64" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            </a>
          </Link> */}

          <Link href="https://www.linkedin.com/in/shen-cong-48b15944/">
            <a className="p-8 mt-8 border border-current w-32 rounded-full dark:hover:text-blue-50 hover:text-gray-700 focus:text-blue-200 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.64" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </a>
          </Link>

          <Link href="https://www.instagram.com/kevincong/">
            <a className="p-8 mt-8 border border-current w-32 rounded-full dark:hover:text-blue-50 hover:text-gray-700 focus:text-blue-200 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.64" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </Link>

          <Link href="https://www.youtube.com/c/ShenCong">
            <a className="p-8 mt-8 border border-current w-32 rounded-full dark:hover:text-blue-50 hover:text-gray-700 focus:text-blue-200 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.64" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            </a>
          </Link>

          <Link href="https://open.spotify.com/user/kevincong0722">
            <a className="p-8 mt-8 border border-current w-32 rounded-full dark:hover:text-blue-50 hover:text-gray-700 focus:text-blue-200 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.64" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </a>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-16">
        <a className="flex text-xs items-center justify-center dark:text-white">Copyright © 2021 | scong</a>
      </footer>

      <style jsx>{`
       
      `}</style>

      <style jsx global>{`
        
      `}</style>
    </div>
  )
}
