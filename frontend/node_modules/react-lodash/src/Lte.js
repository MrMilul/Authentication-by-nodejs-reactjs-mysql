import React from 'react'
import lte from 'lodash/lte'

export default function Lte(props) {
  const value = lte(props.value, props.other)
  return value ? props.yes() : props.no()
}

Lte.defaultProps = {
  yes: () => {},
  no: () => {}
}