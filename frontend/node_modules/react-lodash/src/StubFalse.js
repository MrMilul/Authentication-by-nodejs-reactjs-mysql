import React from 'react'
import stubFalse from 'lodash/stubFalse'

export default function StubFalse(props) {
  const value = stubFalse()
  return value ? props.yes() : props.no()
}

StubFalse.defaultProps = {
  yes: () => {},
  no: () => {}
}