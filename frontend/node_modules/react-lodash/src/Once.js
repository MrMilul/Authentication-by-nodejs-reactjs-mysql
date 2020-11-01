import React from 'react'
import once from 'lodash/once'

export default function Once(props) {
  return props.children(once(props.func))
}

Once.defaultProps = {
  children: value => value
}