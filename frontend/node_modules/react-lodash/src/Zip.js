import React from 'react'
import zip from 'lodash/zip'

export default function Zip(props) {
  return props.children(zip(props.arrays))
}

Zip.defaultProps = {
  children: value => value
}