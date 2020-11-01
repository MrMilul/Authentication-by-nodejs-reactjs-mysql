import React from 'react'
import partial from 'lodash/partial'

export default function Partial(props) {
  return props.children(partial(props.func, props.partials))
}

Partial.defaultProps = {
  children: value => value
}