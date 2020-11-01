import React from 'react'
import defaultsDeep from 'lodash/defaultsDeep'

export default function DefaultsDeep(props) {
  return props.children(defaultsDeep(props.object, props.sources))
}

DefaultsDeep.defaultProps = {
  children: value => value
}