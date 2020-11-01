import React from 'react'
import identity from 'lodash/identity'

export default function Identity(props) {
  return props.children(identity(props.value))
}

Identity.defaultProps = {
  children: value => value
}