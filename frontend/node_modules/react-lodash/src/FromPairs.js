import React from 'react'
import fromPairs from 'lodash/fromPairs'

export default function FromPairs(props) {
  return props.children(fromPairs(props.pairs))
}

FromPairs.defaultProps = {
  children: value => value
}