import React from 'react'
import includes from 'lodash/includes'

export default function Includes(props) {
  const value = includes(props.collection, props.value, props.fromIndex)
  return value ? props.yes() : props.no()
}

Includes.defaultProps = {
  yes: () => {},
  no: () => {}
}