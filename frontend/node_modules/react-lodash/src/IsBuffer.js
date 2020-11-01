import React from 'react'
import isBuffer from 'lodash/isBuffer'

export default function IsBuffer(props) {
  const value = isBuffer(props.value)
  return value ? props.yes() : props.no()
}

IsBuffer.defaultProps = {
  yes: () => {},
  no: () => {}
}