import React from 'react'
import forInRight from 'lodash/forInRight'

export default function ForInRight(props) {
  return props.children(forInRight(props.object, props.iteratee))
}

ForInRight.defaultProps = {
  children: value => value
}