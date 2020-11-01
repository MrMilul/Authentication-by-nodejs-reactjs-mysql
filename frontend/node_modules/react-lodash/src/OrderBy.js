import React from 'react'
import orderBy from 'lodash/orderBy'

export default function OrderBy(props) {
  return props.children(orderBy(props.collection, props.iteratees, props.orders))
}

OrderBy.defaultProps = {
  children: value => value
}