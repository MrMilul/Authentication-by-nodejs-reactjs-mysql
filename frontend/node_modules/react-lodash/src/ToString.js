import React from 'react'
import toString from 'lodash/toString'

export default function ToString(props) {
  return props.children(toString(props.value))
}

ToString.defaultProps = {
  children: value => value
}