import React from 'react'
import add from 'lodash/add'

export default function Add(props) {
  return props.children(add(props.augend, props.addend))
}

Add.defaultProps = {
  children: value => value
}