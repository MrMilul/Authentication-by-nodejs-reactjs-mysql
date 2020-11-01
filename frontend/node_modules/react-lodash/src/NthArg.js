import React from 'react'
import nthArg from 'lodash/nthArg'

export default function NthArg(props) {
  return props.children(nthArg(props.n))
}

NthArg.defaultProps = {
  children: value => value
}