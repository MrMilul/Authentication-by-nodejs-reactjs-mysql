import React from 'react'
import isWeakMap from 'lodash/isWeakMap'

export default function IsWeakMap(props) {
  const value = isWeakMap(props.value)
  return value ? props.yes() : props.no()
}

IsWeakMap.defaultProps = {
  yes: () => {},
  no: () => {}
}