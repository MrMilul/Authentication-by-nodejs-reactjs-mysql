import React from 'react'
import isFunction from 'lodash/isFunction'

export default function IsFunction(props) {
  const value = isFunction(props.value)
  return value ? props.yes() : props.no()
}

IsFunction.defaultProps = {
  yes: () => {},
  no: () => {}
}