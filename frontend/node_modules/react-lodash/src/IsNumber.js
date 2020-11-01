import React from 'react'
import isNumber from 'lodash/isNumber'

export default function IsNumber(props) {
  const value = isNumber(props.value)
  return value ? props.yes() : props.no()
}

IsNumber.defaultProps = {
  yes: () => {},
  no: () => {}
}