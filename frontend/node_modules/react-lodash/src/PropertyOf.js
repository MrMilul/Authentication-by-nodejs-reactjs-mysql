import React from 'react'
import propertyOf from 'lodash/propertyOf'

export default function PropertyOf(props) {
  return props.children(propertyOf(props.object))
}

PropertyOf.defaultProps = {
  children: value => value
}