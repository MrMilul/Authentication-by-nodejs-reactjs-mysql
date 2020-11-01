import React from 'react'
import stubArray from 'lodash/stubArray'

export default function StubArray(props) {
  return props.children(stubArray())
}

StubArray.defaultProps = {
  children: value => value
}