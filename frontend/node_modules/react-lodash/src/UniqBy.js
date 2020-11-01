import React from 'react'
import uniqBy from 'lodash/uniqBy'

export default function UniqBy(props) {
  return props.children(uniqBy(props.array, props.iteratee))
}

UniqBy.defaultProps = {
  children: value => value
}