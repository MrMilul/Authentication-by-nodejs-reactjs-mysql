import React from 'react'
import property from 'lodash/property'

export default function Property(props) {
  return props.children(property(props.path))
}

Property.defaultProps = {
  children: value => value
}