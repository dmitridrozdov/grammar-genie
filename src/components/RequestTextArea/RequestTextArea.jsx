import React from 'react'

class RequestTextArea extends React.Component {
  render() {
    return (
      <textarea
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

export default RequestTextArea
