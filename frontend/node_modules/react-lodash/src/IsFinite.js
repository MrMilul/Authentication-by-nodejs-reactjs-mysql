import React from 'react'
import isFinite from 'lodash/isFinite'

export default function IsFinite(props) {
  const value = isFinite(props.value)
  return value ? props.yes() : props.no()
}

IsFinite.defaultProps = {
  yes: () => {},
  no: () => {}
}