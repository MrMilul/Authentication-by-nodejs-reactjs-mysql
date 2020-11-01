import React from 'react'
import flowRight from 'lodash/flowRight'

export default function FlowRight(props) {
  return props.children(flowRight(props.funcs))
}

FlowRight.defaultProps = {
  children: value => value
}