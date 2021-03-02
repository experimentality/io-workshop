import type { PropsWithChildren, ReactElement } from 'react'
import React from 'react'

type TMiBloqueFuncional = {
  text: string
}

function MiBloqueFuncional({
  children,
  text,
}: PropsWithChildren<TMiBloqueFuncional>) {
  const newList = [
    { text: text || 'ji' },
    { text: text || 'ji' },
    { text: text || 'ji' },
  ]

  return newList.map(e => {
    return React.Children.map(children, child => {
      return child && React.cloneElement(child as ReactElement, { ...e }, null)
    })
  })
}

MiBloqueFuncional.schema = {
  title: 'Mi bloque funcional',
  type: 'object',
  properties: {
    text: {
      title: 'Texto para mi bloque',
      description: 'Escribe el texto que desea ver',
      type: 'string',
      default: 'Expy',
    },
  },
}

export default MiBloqueFuncional
