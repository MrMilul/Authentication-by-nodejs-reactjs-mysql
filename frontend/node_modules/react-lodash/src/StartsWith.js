import React from 'react'
import startsWith from 'lodash/startsWith'

export default function StartsWith(props) {
  const value = startsWith(props.string, props.target, props.position)
  return value ? props.yes() : props.no()
}

StartsWith.defaultProps = {
  yes: () => {},
  no: () => {}
}