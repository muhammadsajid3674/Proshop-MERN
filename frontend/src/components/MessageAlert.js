import React from 'react'
import { Alert } from 'react-bootstrap'

const MessageAlert = ({ variant, message }) => {
    return (
        <Alert variant={variant}>{message}</Alert>
    )
}

export default MessageAlert;