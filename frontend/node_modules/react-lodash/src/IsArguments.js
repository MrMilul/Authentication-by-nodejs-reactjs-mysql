import React from 'react'
import isArguments from 'lodash/isArguments'

export default function IsArguments(props) {
  const value = isArguments(props.value)
  return value ? props.yes() : props.no()
}

IsArguments.defaultProps = {
  yes: () => {},
  no: () => {}
}