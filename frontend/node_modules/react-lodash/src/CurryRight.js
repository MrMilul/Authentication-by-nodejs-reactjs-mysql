import React from 'react'
import curryRight from 'lodash/curryRight'

export default function CurryRight(props) {
  return props.children(curryRight(props.func, props.arity))
}

CurryRight.defaultProps = {
  children: value => value
}