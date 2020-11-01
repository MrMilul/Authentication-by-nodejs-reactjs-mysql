import React from 'react'
import isArrayBuffer from 'lodash/isArrayBuffer'

export default function IsArrayBuffer(props) {
  const value = isArrayBuffer(props.value)
  return value ? props.yes() : props.no()
}

IsArrayBuffer.defaultProps = {
  yes: () => {},
  no: () => {}
}