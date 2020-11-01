import React from 'react'
import isNil from 'lodash/isNil'

export default function IsNil(props) {
  const value = isNil(props.value)
  return value ? props.yes() : props.no()
}

IsNil.defaultProps = {
  yes: () => {},
  no: () => {}
}