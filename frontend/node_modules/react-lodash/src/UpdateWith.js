import React from 'react'
import updateWith from 'lodash/updateWith'

export default function UpdateWith(props) {
  return props.children(updateWith(props.object, props.path, props.updater, props.customizer))
}

UpdateWith.defaultProps = {
  children: value => value
}