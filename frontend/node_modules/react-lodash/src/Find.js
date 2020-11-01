import React from 'react'
import find from 'lodash/find'

export default function Find(props) {
  return props.children(find(props.collection, props.predicate, props.fromIndex))
}

Find.defaultProps = {
  children: value => value
}