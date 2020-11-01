import React from 'react'
import isNull from 'lodash/isNull'

export default function IsNull(props) {
  const value = isNull(props.value)
  return value ? props.yes() : props.no()
}

IsNull.defaultProps = {
  yes: () => {},
  no: () => {}
}