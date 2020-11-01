import React from 'react'
import has from 'lodash/has'

export default function Has(props) {
  const value = has(props.object, props.path)
  return value ? props.yes() : props.no()
}

Has.defaultProps = {
  yes: () => {},
  no: () => {}
}