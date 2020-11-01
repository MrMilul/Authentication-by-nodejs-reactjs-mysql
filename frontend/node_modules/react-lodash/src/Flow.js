import React from 'react'
import flow from 'lodash/flow'

export default function Flow(props) {
  return props.children(flow(props.funcs))
}

Flow.defaultProps = {
  children: value => value
}