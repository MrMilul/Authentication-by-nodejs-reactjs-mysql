import React from 'react'
import last from 'lodash/last'

export default function Last(props) {
  return props.children(last(props.array))
}

Last.defaultProps = {
  children: value => value
}