import React from 'react'
import stubTrue from 'lodash/stubTrue'

export default function StubTrue(props) {
  const value = stubTrue()
  return value ? props.yes() : props.no()
}

StubTrue.defaultProps = {
  yes: () => {},
  no: () => {}
}