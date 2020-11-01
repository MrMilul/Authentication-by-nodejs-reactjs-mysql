import React from 'react'
import isEqual from 'lodash/isEqual'

export default function IsEqual(props) {
  const value = isEqual(props.value, props.other)
  return value ? props.yes() : props.no()
}

IsEqual.defaultProps = {
  yes: () => {},
  no: () => {}
}