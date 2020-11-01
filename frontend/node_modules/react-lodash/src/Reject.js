import React from 'react'
import reject from 'lodash/reject'

export default function Reject(props) {
  return props.children(reject(props.collection, props.predicate))
}

Reject.defaultProps = {
  children: value => value
}