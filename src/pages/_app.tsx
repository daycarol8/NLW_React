import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengeConxtext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
 
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
