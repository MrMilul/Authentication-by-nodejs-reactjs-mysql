import React from 'react'
import now from 'lodash/now'

export default function Now(props) {
  return props.children(now())
}

Now.defaultProps = {
  children: value => value
}