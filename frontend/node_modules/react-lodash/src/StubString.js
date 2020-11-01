import React from 'react'
import stubString from 'lodash/stubString'

export default function StubString(props) {
  return props.children(stubString())
}

StubString.defaultProps = {
  children: value => value
}