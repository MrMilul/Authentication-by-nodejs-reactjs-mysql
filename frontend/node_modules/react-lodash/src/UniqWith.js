import React from 'react'
import uniqWith from 'lodash/uniqWith'

export default function UniqWith(props) {
  return props.children(uniqWith(props.array, props.comparator))
}

UniqWith.defaultProps = {
  children: value => value
}