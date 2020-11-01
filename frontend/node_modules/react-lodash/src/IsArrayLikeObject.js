import React from 'react'
import isArrayLikeObject from 'lodash/isArrayLikeObject'

export default function IsArrayLikeObject(props) {
  const value = isArrayLikeObject(props.value)
  return value ? props.yes() : props.no()
}

IsArrayLikeObject.defaultProps = {
  yes: () => {},
  no: () => {}
}