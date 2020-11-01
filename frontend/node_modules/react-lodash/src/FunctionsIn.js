import React from 'react'
import functionsIn from 'lodash/functionsIn'

export default function FunctionsIn(props) {
  return props.children(functionsIn(props.object))
}

FunctionsIn.defaultProps = {
  children: value => value
}