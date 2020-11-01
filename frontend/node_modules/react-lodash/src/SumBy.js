import React from 'react'
import sumBy from 'lodash/sumBy'

export default function SumBy(props) {
  return props.children(sumBy(props.array, props.iteratee))
}

SumBy.defaultProps = {
  children: value => value
}