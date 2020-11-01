import React from 'react'
import isBoolean from 'lodash/isBoolean'

export default function IsBoolean(props) {
  const value = isBoolean(props.value)
  return value ? props.yes() : props.no()
}

IsBoolean.defaultProps = {
  yes: () => {},
  no: () => {}
}