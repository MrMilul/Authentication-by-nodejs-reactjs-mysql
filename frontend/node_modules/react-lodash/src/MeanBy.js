import React from 'react'
import meanBy from 'lodash/meanBy'

export default function MeanBy(props) {
  return props.children(meanBy(props.array, props.iteratee))
}

MeanBy.defaultProps = {
  children: value => value
}