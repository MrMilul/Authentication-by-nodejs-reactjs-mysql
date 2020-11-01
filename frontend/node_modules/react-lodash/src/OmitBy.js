import React from 'react'
import omitBy from 'lodash/omitBy'

export default function OmitBy(props) {
  return props.children(omitBy(props.object, props.predicate))
}

OmitBy.defaultProps = {
  children: value => value
}