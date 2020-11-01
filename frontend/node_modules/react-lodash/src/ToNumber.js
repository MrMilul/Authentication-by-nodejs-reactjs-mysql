import React from 'react'
import toNumber from 'lodash/toNumber'

export default function ToNumber(props) {
  return props.children(toNumber(props.value))
}

ToNumber.defaultProps = {
  children: value => value
}