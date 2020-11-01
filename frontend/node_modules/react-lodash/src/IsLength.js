import React from 'react'
import isLength from 'lodash/isLength'

export default function IsLength(props) {
  const value = isLength(props.value)
  return value ? props.yes() : props.no()
}

IsLength.defaultProps = {
  yes: () => {},
  no: () => {}
}