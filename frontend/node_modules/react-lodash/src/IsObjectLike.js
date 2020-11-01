import React from 'react'
import isObjectLike from 'lodash/isObjectLike'

export default function IsObjectLike(props) {
  const value = isObjectLike(props.value)
  return value ? props.yes() : props.no()
}

IsObjectLike.defaultProps = {
  yes: () => {},
  no: () => {}
}