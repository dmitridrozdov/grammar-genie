import React from 'react'
import { Button } from '@material-ui/core'

const RequestTextArea = ({ value, onChange, onSave }) => (
  <div>
    <textarea
      value={value}
      onChange={onChange}
      style={{ width: '100%', height: '300px' }}
    />
    <Button variant="contained" onClick={onSave}>
      Save
    </Button>
  </div>
);

export default RequestTextArea
