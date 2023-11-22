import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    {/** Header */}
    <Header></Header>
      {/** Hero */}
      {/** Experiment */}
      {/** About */}
      {/** Skills */}
      {/** Project */}
      {/** Contact Me */}
    </div>
  )
}
