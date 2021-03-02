import React from 'react'

type TPropMiBloqueComponente = {
  text: string
}

const MiBloqueComponente = ({ text }: TPropMiBloqueComponente) => {
  return <h1> Hola Mundo {text} </h1>
}

MiBloqueComponente.schema = {
  title: 'Mi bloque editable',
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

export default MiBloqueComponente
