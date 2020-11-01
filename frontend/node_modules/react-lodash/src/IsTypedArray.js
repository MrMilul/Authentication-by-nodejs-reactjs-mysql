import React from 'react'
import isTypedArray from 'lodash/isTypedArray'

export default function IsTypedArray(props) {
  const value = isTypedArray(props.value)
  return value ? props.yes() : props.no()
}

IsTypedArray.defaultProps = {
  yes: () => {},
  no: () => {}
}