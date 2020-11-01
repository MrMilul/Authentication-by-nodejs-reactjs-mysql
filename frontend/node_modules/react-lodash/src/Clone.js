import React from 'react'
import clone from 'lodash/clone'

export default function Clone(props) {
  return props.children(clone(props.value))
}

Clone.defaultProps = {
  children: value => value
}