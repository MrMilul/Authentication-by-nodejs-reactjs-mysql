import React from 'react'
import isDate from 'lodash/isDate'

export default function IsDate(props) {
  const value = isDate(props.value)
  return value ? props.yes() : props.no()
}

IsDate.defaultProps = {
  yes: () => {},
  no: () => {}
}