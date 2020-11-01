import React from 'react'
import isSet from 'lodash/isSet'

export default function IsSet(props) {
  const value = isSet(props.value)
  return value ? props.yes() : props.no()
}

IsSet.defaultProps = {
  yes: () => {},
  no: () => {}
}