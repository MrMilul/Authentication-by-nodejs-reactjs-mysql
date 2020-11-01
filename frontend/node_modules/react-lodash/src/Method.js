import React from 'react'
import method from 'lodash/method'

export default function Method(props) {
  return props.children(method(props.path, props.args))
}

Method.defaultProps = {
  children: value => value
}