import React from 'react'
import unset from 'lodash/unset'

export default function Unset(props) {
  const value = unset(props.object, props.path)
  return value ? props.yes() : props.no()
}

Unset.defaultProps = {
  yes: () => {},
  no: () => {}
}