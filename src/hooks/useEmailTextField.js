import { useState } from 'react'

const useEmailTextField = onSuccess => {
  const [textField, setTextField] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (e, inputRef) => {
    e.preventDefault()
    const email = inputRef.current.value.trim().toLowerCase()

    if (email.length === 0) {
      setErrorMessage('Please enter an email address')
      return
    }

    setErrorMessage('')
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

      console.log('res: ', res)

      // 406 invalid email
      // 407 arden bani meja

      if (res.status === 202) {
        onSuccess()
      } else {
        setErrorMessage('You are already in waitlist')
      }
      console.log('here')
    } catch (e) {
      console.log('e: ', e)
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
