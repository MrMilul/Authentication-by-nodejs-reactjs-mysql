import React from 'react'
import zipObjectDeep from 'lodash/zipObjectDeep'

export default function ZipObjectDeep(props) {
  return props.children(zipObjectDeep(props.props, props.values))
}

ZipObjectDeep.defaultProps = {
  children: value => value
}