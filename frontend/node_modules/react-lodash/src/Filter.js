import React from 'react'
import filter from 'lodash/filter'

export default function Filter(props) {
  return props.children(filter(props.collection, props.predicate))
}

Filter.defaultProps = {
  children: value => value
}