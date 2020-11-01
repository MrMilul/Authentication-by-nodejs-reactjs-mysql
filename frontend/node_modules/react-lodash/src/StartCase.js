import React from 'react'
import startCase from 'lodash/startCase'

export default function StartCase(props) {
  return props.children(startCase(props.string))
}

StartCase.defaultProps = {
  children: value => value
}