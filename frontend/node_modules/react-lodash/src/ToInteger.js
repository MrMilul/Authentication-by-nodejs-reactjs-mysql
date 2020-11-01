import React from 'react'
import toInteger from 'lodash/toInteger'

export default function ToInteger(props) {
  return props.children(toInteger(props.value))
}

ToInteger.defaultProps = {
  children: value => value
}