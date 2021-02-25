import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengeConxtext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
 
  return (
    //todos os elementos dentro do provider vao ter acesso aos dados do contexto
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
      
    
  )
}

export default MyApp
