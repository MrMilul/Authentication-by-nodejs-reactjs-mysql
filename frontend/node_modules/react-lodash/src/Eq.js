import React from 'react'
import eq from 'lodash/eq'

export default function Eq(props) {
  const value = eq(props.value, props.other)
  return value ? props.yes() : props.no()
}

Eq.defaultProps = {
  yes: () => {},
  no: () => {}
}