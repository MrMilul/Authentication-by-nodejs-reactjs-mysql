import React from 'react'
import isUndefined from 'lodash/isUndefined'

export default function IsUndefined(props) {
  const value = isUndefined(props.value)
  return value ? props.yes() : props.no()
}

IsUndefined.defaultProps = {
  yes: () => {},
  no: () => {}
}