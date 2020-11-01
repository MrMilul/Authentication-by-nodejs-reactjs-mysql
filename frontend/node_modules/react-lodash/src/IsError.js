import React from 'react'
import isError from 'lodash/isError'

export default function IsError(props) {
  const value = isError(props.value)
  return value ? props.yes() : props.no()
}

IsError.defaultProps = {
  yes: () => {},
  no: () => {}
}