import React from 'react'
import each from 'lodash/each'

export default function Each(props) {
  return props.children(each(props.collection, props.iteratee))
}

Each.defaultProps = {
  children: value => value
}