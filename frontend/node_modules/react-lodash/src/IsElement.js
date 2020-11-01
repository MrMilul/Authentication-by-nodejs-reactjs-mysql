import React from 'react'
import isElement from 'lodash/isElement'

export default function IsElement(props) {
  const value = isElement(props.value)
  return value ? props.yes() : props.no()
}

IsElement.defaultProps = {
  yes: () => {},
  no: () => {}
}