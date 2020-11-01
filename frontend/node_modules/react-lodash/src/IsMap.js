import React from 'react'
import isMap from 'lodash/isMap'

export default function IsMap(props) {
  const value = isMap(props.value)
  return value ? props.yes() : props.no()
}

IsMap.defaultProps = {
  yes: () => {},
  no: () => {}
}