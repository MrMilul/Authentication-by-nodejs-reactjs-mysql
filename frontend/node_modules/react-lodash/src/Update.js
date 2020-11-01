import React from 'react'
import update from 'lodash/update'

export default function Update(props) {
  return props.children(update(props.object, props.path, props.updater))
}

Update.defaultProps = {
  children: value => value
}