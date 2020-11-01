import React from 'react'
import partialRight from 'lodash/partialRight'

export default function PartialRight(props) {
  return props.children(partialRight(props.func, props.partials))
}

PartialRight.defaultProps = {
  children: value => value
}