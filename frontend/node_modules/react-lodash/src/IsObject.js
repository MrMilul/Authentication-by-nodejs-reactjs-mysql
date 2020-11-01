import React from 'react'
import isObject from 'lodash/isObject'

export default function IsObject(props) {
  const value = isObject(props.value)
  return value ? props.yes() : props.no()
}

IsObject.defaultProps = {
  yes: () => {},
  no: () => {}
}