import React from 'react'
import isRegExp from 'lodash/isRegExp'

export default function IsRegExp(props) {
  const value = isRegExp(props.value)
  return value ? props.yes() : props.no()
}

IsRegExp.defaultProps = {
  yes: () => {},
  no: () => {}
}