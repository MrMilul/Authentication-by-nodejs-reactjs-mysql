import React from 'react'
import isSafeInteger from 'lodash/isSafeInteger'

export default function IsSafeInteger(props) {
  const value = isSafeInteger(props.value)
  return value ? props.yes() : props.no()
}

IsSafeInteger.defaultProps = {
  yes: () => {},
  no: () => {}
}