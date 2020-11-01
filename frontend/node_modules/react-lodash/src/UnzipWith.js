import React from 'react'
import unzipWith from 'lodash/unzipWith'

export default function UnzipWith(props) {
  return props.children(unzipWith(props.array, props.iteratee))
}

UnzipWith.defaultProps = {
  children: value => value
}