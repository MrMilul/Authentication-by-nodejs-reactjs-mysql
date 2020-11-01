import React from 'react'
import sortBy from 'lodash/sortBy'

export default function SortBy(props) {
  return props.children(sortBy(props.collection, props.iteratees))
}

SortBy.defaultProps = {
  children: value => value
}