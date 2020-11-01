import React from 'react'
import invertBy from 'lodash/invertBy'

export default function InvertBy(props) {
  return props.children(invertBy(props.object, props.iteratee))
}

InvertBy.defaultProps = {
  children: value => value
}