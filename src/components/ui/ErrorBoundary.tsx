import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div
          style={{
            width: '100%',
            height: '100%',
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-surface-mid)',
          }}
        >
          <p className="text-label" style={{ opacity: 0.4 }}>
            CONTENT UNAVAILABLE
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
