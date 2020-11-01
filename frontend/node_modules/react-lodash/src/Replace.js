import React from 'react'
import replace from 'lodash/replace'

export default function Replace(props) {
  return props.children(replace(props.string, props.pattern, props.replacement))
}

Replace.defaultProps = {
  children: value => value
}