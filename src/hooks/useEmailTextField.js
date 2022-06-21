import { useState } from 'react'

const useEmailTextField = onSuccess => {
  const [textField, setTextField] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (e, inputRef) => {
    e.preventDefault()
    const email = inputRef.current.value.trim().toLowerCase()

    setErrorMessage('')

    if (email.length === 0) {
      setErrorMessage('Please enter an email address')
      return
    }

    try {
      const res = await fetch('https://nftsstack.io/api/v1/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      })

      const data = await res.json()

      if (data?.success) {
        onSuccess()
      } else if (data.msg === 'Invalid email') {
        setErrorMessage('Invalid email address')
      } else if (data.msg === 'Email already in waitlist') {
        setErrorMessage('You are already in waitlist')
      }
    } catch (e) {
      console.error('e: ', e)
      setErrorMessage('Something went wrong. Please try again later.')
    }

    setTextField('')
  }

  const onChange = e => {
    setTextField(e.target.value)
  }

  return {
    textField,
    errorMessage,
    onSubmit,
    onChange
  }
}

export default useEmailTextField
