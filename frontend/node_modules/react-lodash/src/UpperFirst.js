import React from 'react'
import upperFirst from 'lodash/upperFirst'

export default function UpperFirst(props) {
  return props.children(upperFirst(props.string))
}

UpperFirst.defaultProps = {
  children: value => value
}