import React from 'react'
import { Button } from 'react-bootstrap'

export default function SignedOut({SignIn}) {
  return (
    <div>
        <Button variant="primary" onClick={SignIn}>Giriş Yap</Button>{' '}
        <Button variant="primary">Kayıt Ol</Button>{' '}
    </div>
  )
}
