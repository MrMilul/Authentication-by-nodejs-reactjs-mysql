import React from 'react'
import isEqualWith from 'lodash/isEqualWith'

export default function IsEqualWith(props) {
  const value = isEqualWith(props.value, props.other, props.customizer)
  return value ? props.yes() : props.no()
}

IsEqualWith.defaultProps = {
  yes: () => {},
  no: () => {}
}