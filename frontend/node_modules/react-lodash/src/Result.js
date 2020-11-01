import React from 'react'
import result from 'lodash/result'

export default function Result(props) {
  return props.children(result(props.object, props.path, props.defaultValue))
}

Result.defaultProps = {
  children: value => value
}