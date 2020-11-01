import React from 'react'
import isNaN from 'lodash/isNaN'

export default function IsNaN(props) {
  const value = isNaN(props.value)
  return value ? props.yes() : props.no()
}

IsNaN.defaultProps = {
  yes: () => {},
  no: () => {}
}