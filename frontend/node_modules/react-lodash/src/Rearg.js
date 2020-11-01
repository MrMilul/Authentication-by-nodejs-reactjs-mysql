import React from 'react'
import rearg from 'lodash/rearg'

export default function Rearg(props) {
  return props.children(rearg(props.func, props.indexes))
}

Rearg.defaultProps = {
  children: value => value
}