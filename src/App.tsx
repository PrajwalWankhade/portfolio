import { useEffect } from 'react'
import { ErrorState } from './components/ErrorState'
import { LoadingState } from './components/LoadingState'
import { PortfolioPage } from './pages/PortfolioPage'
import { useSiteConfig } from './config/useSiteConfig'

export function App() {
  const { config, error, loading } = useSiteConfig()

  useEffect(() => {
    if (!config) return
    document.title = config.meta.title
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', config.meta.themeColor ?? '#0b1220')
  }, [config])

  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} />
  if (!config) return <ErrorState message="Config not found." />

  return <PortfolioPage config={config} />
}

