import React from 'react'
import mixin from 'lodash/mixin'

export default function Mixin(props) {
  return props.children(mixin(props.object, props.source, props.options))
}

Mixin.defaultProps = {
  children: value => value
}