import React from 'react'
import countBy from 'lodash/countBy'

export default function CountBy(props) {
  return props.children(countBy(props.collection, props.iteratee))
}

CountBy.defaultProps = {
  children: value => value
}