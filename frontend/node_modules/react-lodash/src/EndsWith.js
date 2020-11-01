import React from 'react'
import endsWith from 'lodash/endsWith'

export default function EndsWith(props) {
  const value = endsWith(props.string, props.target, props.position)
  return value ? props.yes() : props.no()
}

EndsWith.defaultProps = {
  yes: () => {},
  no: () => {}
}