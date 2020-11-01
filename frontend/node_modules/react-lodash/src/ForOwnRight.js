import React from 'react'
import forOwnRight from 'lodash/forOwnRight'

export default function ForOwnRight(props) {
  return props.children(forOwnRight(props.object, props.iteratee))
}

ForOwnRight.defaultProps = {
  children: value => value
}