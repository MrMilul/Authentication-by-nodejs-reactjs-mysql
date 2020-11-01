import React from 'react'
import isArrayLike from 'lodash/isArrayLike'

export default function IsArrayLike(props) {
  const value = isArrayLike(props.value)
  return value ? props.yes() : props.no()
}

IsArrayLike.defaultProps = {
  yes: () => {},
  no: () => {}
}