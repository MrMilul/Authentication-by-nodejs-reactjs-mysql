import React from 'react'
import isString from 'lodash/isString'

export default function IsString(props) {
  const value = isString(props.value)
  return value ? props.yes() : props.no()
}

IsString.defaultProps = {
  yes: () => {},
  no: () => {}
}