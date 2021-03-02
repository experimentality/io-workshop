import React from 'react'

type TPropMiBloqueSchema = {
  text: string
  boolean?: boolean
  image?: string
  radio?: string
}

const MiBloqueSchema = ({ text }: TPropMiBloqueSchema) => {
  return <h1> Hola Mundo {text} </h1>
}

MiBloqueSchema.schema = {
  title: 'Mi bloque editable',
  type: 'object',
  properties: {
    text: {
      title: 'Texto para mi bloque',
      description: 'Escribe el texto que desea ver',
      type: 'string',
      default: 'Expy',
    },
    textarea: {
      title: 'Texto para mi bloque',
      description: 'Escribe el texto que desea ver',
      type: 'string',
      default: 'Expy',
      widget: { 'ui:widget': 'textarea' },
    },
    ioMessage: {
      title: 'Texto para mi bloque',
      description: 'Escribe el texto que desea ver',
      type: 'string',
      default: 'Expy',
      widget: { 'ui:widget': 'IOMessage' },
    },
    boolean: {
      title: 'Texto para mi bloque',
      description: 'Escribe el texto que desea ver',
      type: 'boolean',
      default: false,
    },
    image: {
      title: 'Texto para mi bloque',
      description: 'Escribe el texto que desea ver',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    radio: {
      title: 'Texto para mi bloque',
      description: 'Escribe el texto que desea ver',
      type: 'string',
      enum: ['ancho', 'alto'],
      enumNames: ['ancho', 'alto'],
      widget: {
        'ui:widget': 'radio',
      },
    },
    Array: {
      title: 'Texto para mi bloque',
      description: 'Escribe el texto que desea ver',
      type: 'array',
      items: {
        properties: {
          image: {
            title: 'Imagen',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
        },
      },
    },
  },
}

export default MiBloqueSchema
