import React from 'react'
import times from 'lodash/times'

export default function Times(props) {
  return props.children(times(props.n, props.iteratee))
}

Times.defaultProps = {
  children: value => value
}