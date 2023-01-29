import '@/styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
  return <MantineProvider><Auth0Provider
    domain="dev-cn0o5dghcju3motq.us.auth0.com"
    clientId="pKPmTluxRUVSPTXRdHPrEAsMZmhdaYex"
    authorizationParams={{
      redirect_uri: "http://localhost:3001"
    }} >
    <Component {...pageProps} />
    </Auth0Provider></MantineProvider> 
}
