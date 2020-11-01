import React from 'react'
import zipObject from 'lodash/zipObject'

export default function ZipObject(props) {
  return props.children(zipObject(props.props, props.values))
}

ZipObject.defaultProps = {
  children: value => value
}