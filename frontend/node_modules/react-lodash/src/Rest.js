import React from 'react'
import rest from 'lodash/rest'

export default function Rest(props) {
  return props.children(rest(props.func, props.start))
}

Rest.defaultProps = {
  children: value => value
}