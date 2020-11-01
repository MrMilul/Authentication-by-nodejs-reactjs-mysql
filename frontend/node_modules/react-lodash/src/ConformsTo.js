import React from 'react'
import conformsTo from 'lodash/conformsTo'

export default function ConformsTo(props) {
  const value = conformsTo(props.object, props.source)
  return value ? props.yes() : props.no()
}

ConformsTo.defaultProps = {
  yes: () => {},
  no: () => {}
}