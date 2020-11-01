import React from 'react'
import toPath from 'lodash/toPath'

export default function ToPath(props) {
  return props.children(toPath(props.value))
}

ToPath.defaultProps = {
  children: value => value
}