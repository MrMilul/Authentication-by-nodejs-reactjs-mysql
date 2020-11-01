import React from 'react'
import isNative from 'lodash/isNative'

export default function IsNative(props) {
  const value = isNative(props.value)
  return value ? props.yes() : props.no()
}

IsNative.defaultProps = {
  yes: () => {},
  no: () => {}
}