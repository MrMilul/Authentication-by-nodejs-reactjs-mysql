import React from 'react'
import transform from 'lodash/transform'

export default function Transform(props) {
  return props.children(transform(props.object, props.iteratee, props.accumulator))
}

Transform.defaultProps = {
  children: value => value
}