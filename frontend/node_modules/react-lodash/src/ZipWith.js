import React from 'react'
import zipWith from 'lodash/zipWith'

export default function ZipWith(props) {
  return props.children(zipWith(props.arrays, props.iteratee))
}

ZipWith.defaultProps = {
  children: value => value
}