import React from 'react'
import get from 'lodash/get'

export default function Get(props) {
  return props.children(get(props.object, props.path, props.defaultValue))
}

Get.defaultProps = {
  children: value => value
}