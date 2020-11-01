import React from 'react'
import create from 'lodash/create'

export default function Create(props) {
  return props.children(create(props.prototype, props.properties))
}

Create.defaultProps = {
  children: value => value
}