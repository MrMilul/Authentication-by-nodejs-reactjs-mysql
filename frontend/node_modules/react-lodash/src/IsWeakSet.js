import React from 'react'
import isWeakSet from 'lodash/isWeakSet'

export default function IsWeakSet(props) {
  const value = isWeakSet(props.value)
  return value ? props.yes() : props.no()
}

IsWeakSet.defaultProps = {
  yes: () => {},
  no: () => {}
}