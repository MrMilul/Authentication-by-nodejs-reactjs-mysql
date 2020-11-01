import React from 'react'
import gt from 'lodash/gt'

export default function Gt(props) {
  const value = gt(props.value, props.other)
  return value ? props.yes() : props.no()
}

Gt.defaultProps = {
  yes: () => {},
  no: () => {}
}