import React from 'react'
import isArray from 'lodash/isArray'

export default function IsArray(props) {
  const value = isArray(props.value)
  return value ? props.yes() : props.no()
}

IsArray.defaultProps = {
  yes: () => {},
  no: () => {}
}