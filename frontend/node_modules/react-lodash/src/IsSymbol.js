import React from 'react'
import isSymbol from 'lodash/isSymbol'

export default function IsSymbol(props) {
  const value = isSymbol(props.value)
  return value ? props.yes() : props.no()
}

IsSymbol.defaultProps = {
  yes: () => {},
  no: () => {}
}