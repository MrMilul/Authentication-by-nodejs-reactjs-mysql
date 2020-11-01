import React from 'react'
import over from 'lodash/over'

export default function Over(props) {
  return props.children(over(props.iteratees))
}

Over.defaultProps = {
  children: value => value
}