import React from 'react'
import stubObject from 'lodash/stubObject'

export default function StubObject(props) {
  return props.children(stubObject())
}

StubObject.defaultProps = {
  children: value => value
}