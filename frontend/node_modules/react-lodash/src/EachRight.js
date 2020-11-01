import React from 'react'
import eachRight from 'lodash/eachRight'

export default function EachRight(props) {
  return props.children(eachRight(props.collection, props.iteratee))
}

EachRight.defaultProps = {
  children: value => value
}