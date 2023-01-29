import '@/styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react'
import type { AppProps } from 'next/app'
import { MantineProvider, createEmotionCache } from '@mantine/core';

const myCache = createEmotionCache({
  key: 'mantine',
  prepend: false
});

export default function App({ Component, pageProps }: AppProps) {
  return <MantineProvider emotionCache={myCache} theme={{ colorScheme: "dark"}}><Auth0Provider

    domain="dev-cn0o5dghcju3motq.us.auth0.com"
    clientId="pKPmTluxRUVSPTXRdHPrEAsMZmhdaYex"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/boothmanager"
    }} >
    <Component {...pageProps} />
    </Auth0Provider></MantineProvider> 
}
