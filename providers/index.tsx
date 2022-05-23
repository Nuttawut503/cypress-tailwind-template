import React, { cloneElement } from 'react'
import { ThemeProvider } from './theme'

const ProviderComposer: React.FC<{contexts: Array<any>, children?: React.ReactNode}> = (props) => {
  return props.contexts.reduce(
    (children, parent) => cloneElement(parent, {children}),
    props.children
  )
}

const ContextProvider: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return (
    <ProviderComposer contexts={[<ThemeProvider/>]}>
      {children}
    </ProviderComposer>
  )
}

export default ContextProvider
