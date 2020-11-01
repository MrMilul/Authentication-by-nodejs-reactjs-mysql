import React from 'react'
import valuesIn from 'lodash/valuesIn'

export default function ValuesIn(props) {
  return props.children(valuesIn(props.object))
}

ValuesIn.defaultProps = {
  children: value => value
}