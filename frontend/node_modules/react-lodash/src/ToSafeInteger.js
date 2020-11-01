import React from 'react'
import toSafeInteger from 'lodash/toSafeInteger'

export default function ToSafeInteger(props) {
  return props.children(toSafeInteger(props.value))
}

ToSafeInteger.defaultProps = {
  children: value => value
}