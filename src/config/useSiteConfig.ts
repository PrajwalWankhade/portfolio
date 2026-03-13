import { useEffect, useMemo, useState } from 'react'
import { SiteConfigSchema, type SiteConfig } from './schema'

type State =
  | { loading: true; error: null; config: null }
  | { loading: false; error: string; config: null }
  | { loading: false; error: null; config: SiteConfig }

function formatUnknownError(err: unknown) {
  if (typeof err === 'string') return err
  if (err instanceof Error) return err.message
  return 'Unknown error'
}

export function useSiteConfig(): State {
  const [state, setState] = useState<State>({
    loading: true,
    error: null,
    config: null,
  })

  const configUrl = useMemo(() => '/config.json', [])

  useEffect(() => {
    const controller = new AbortController()

    async function run() {
      try {
        const res = await fetch(configUrl, { signal: controller.signal })
        if (!res.ok) throw new Error(`Failed to load config.json (${res.status})`)

        const raw: unknown = await res.json()
        const parsed = SiteConfigSchema.safeParse(raw)
        if (!parsed.success) {
          throw new Error(`Invalid config.json: ${parsed.error.issues[0]?.message ?? ''}`)
        }

        setState({ loading: false, error: null, config: parsed.data })
      } catch (err) {
        if (controller.signal.aborted) return
        setState({ loading: false, error: formatUnknownError(err), config: null })
      }
    }

    run()
    return () => controller.abort()
  }, [configUrl])

  return state
}

