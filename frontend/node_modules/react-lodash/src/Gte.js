import React from 'react'
import gte from 'lodash/gte'

export default function Gte(props) {
  const value = gte(props.value, props.other)
  return value ? props.yes() : props.no()
}

Gte.defaultProps = {
  yes: () => {},
  no: () => {}
}