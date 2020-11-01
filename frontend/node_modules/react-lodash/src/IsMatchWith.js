import React from 'react'
import isMatchWith from 'lodash/isMatchWith'

export default function IsMatchWith(props) {
  const value = isMatchWith(props.object, props.source, props.customizer)
  return value ? props.yes() : props.no()
}

IsMatchWith.defaultProps = {
  yes: () => {},
  no: () => {}
}