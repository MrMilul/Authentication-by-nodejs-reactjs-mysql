import React from 'react'
import mergeWith from 'lodash/mergeWith'

export default function MergeWith(props) {
  return props.children(mergeWith(props.object, props.sources, props.customizer))
}

MergeWith.defaultProps = {
  children: value => value
}