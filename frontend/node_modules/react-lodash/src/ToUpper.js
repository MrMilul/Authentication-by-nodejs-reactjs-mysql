import React from 'react'
import toUpper from 'lodash/toUpper'

export default function ToUpper(props) {
  return props.children(toUpper(props.string))
}

ToUpper.defaultProps = {
  children: value => value
}