import React from 'react'
import sample from 'lodash/sample'

export default function Sample(props) {
  return props.children(sample(props.collection))
}

Sample.defaultProps = {
  children: value => value
}