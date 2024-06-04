// pages/index.js
import Head from 'next/head'
import { SignupFormDemo  } from './components/LabelActivationForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Label Activation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignupFormDemo />
      
      
    </div>
  )
}
