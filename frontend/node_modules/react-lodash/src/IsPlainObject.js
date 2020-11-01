import React from 'react'
import isPlainObject from 'lodash/isPlainObject'

export default function IsPlainObject(props) {
  const value = isPlainObject(props.value)
  return value ? props.yes() : props.no()
}

IsPlainObject.defaultProps = {
  yes: () => {},
  no: () => {}
}