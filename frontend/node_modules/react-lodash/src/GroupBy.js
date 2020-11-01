import React from 'react'
import groupBy from 'lodash/groupBy'

export default function GroupBy(props) {
  return props.children(groupBy(props.collection, props.iteratee))
}

GroupBy.defaultProps = {
  children: value => value
}