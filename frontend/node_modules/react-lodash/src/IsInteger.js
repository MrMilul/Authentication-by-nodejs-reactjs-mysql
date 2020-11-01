import React from 'react'
import isInteger from 'lodash/isInteger'

export default function IsInteger(props) {
  const value = isInteger(props.value)
  return value ? props.yes() : props.no()
}

IsInteger.defaultProps = {
  yes: () => {},
  no: () => {}
}