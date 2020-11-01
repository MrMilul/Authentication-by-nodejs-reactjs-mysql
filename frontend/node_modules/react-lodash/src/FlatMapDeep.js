import React from 'react'
import flatMapDeep from 'lodash/flatMapDeep'

export default function FlatMapDeep(props) {
  return props.children(flatMapDeep(props.collection, props.iteratee))
}

FlatMapDeep.defaultProps = {
  children: value => value
}