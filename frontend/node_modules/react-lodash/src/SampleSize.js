import React from 'react'
import sampleSize from 'lodash/sampleSize'

export default function SampleSize(props) {
  return props.children(sampleSize(props.collection, props.n))
}

SampleSize.defaultProps = {
  children: value => value
}