import React from 'react'
import reduceRight from 'lodash/reduceRight'

export default function ReduceRight(props) {
  return props.children(reduceRight(props.collection, props.iteratee, props.accumulator))
}

ReduceRight.defaultProps = {
  children: value => value
}