import React from 'react'
import forOwn from 'lodash/forOwn'

export default function ForOwn(props) {
  return props.children(forOwn(props.object, props.iteratee))
}

ForOwn.defaultProps = {
  children: value => value
}