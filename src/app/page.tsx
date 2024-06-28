// pages/index.js
import Head from 'next/head'
import { SignupFormDemo  } from './components/LabelActivationForm'
import TrackDetailsForm from './components/TrackForm'
//import TrackDetailsForm from './components/TrackDetailsForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Label Activation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignupFormDemo />
      <TrackDetailsForm/>
      </div>
  )
}
