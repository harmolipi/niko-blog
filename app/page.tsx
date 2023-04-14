import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="container mx-auto">
      <main>
        <div className="space-y-4">
          <h1 className="text-center text-5xl">NextJS 13 Blog</h1>
          <p className="text-center text-xl">
            Welcome to a dynamic markdown blog using NextJS 13.
          </p>
        </div>
      </main>
    </div>
  )
}
