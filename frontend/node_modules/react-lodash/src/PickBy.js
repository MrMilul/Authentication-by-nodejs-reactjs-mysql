import React from 'react'
import pickBy from 'lodash/pickBy'

export default function PickBy(props) {
  return props.children(pickBy(props.object, props.predicate))
}

PickBy.defaultProps = {
  children: value => value
}