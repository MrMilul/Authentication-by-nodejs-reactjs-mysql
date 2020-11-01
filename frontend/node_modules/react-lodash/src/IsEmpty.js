import React from 'react'
import isEmpty from 'lodash/isEmpty'

export default function IsEmpty(props) {
  const value = isEmpty(props.value)
  return value ? props.yes() : props.no()
}

IsEmpty.defaultProps = {
  yes: () => {},
  no: () => {}
}