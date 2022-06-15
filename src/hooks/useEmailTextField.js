import { useState } from 'react'

const useEmailTextField = (onSuccess) => {
  const [textField, setTextField] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [emailList, setEmailList] = useState([
    'abo@gmail.com',
    'eduard@gmail.com',
    'ashot@gmail.com',
    'van@gmail.com',
    'hrach@gmail.com'
  ])

  const onSubmit = (e, inputRef) => {
    e.preventDefault()
    const email = inputRef.current.value.trim().toLowerCase()
    setErrorMessage('')

    console.log('email : ', email)
    console.log('emailList : ', emailList)
    console.log('isEmailInlist:', emailList.includes(email))


    if (emailList.includes(email)) {
      setErrorMessage('You already subscribed')
      return
    }

    setEmailList([...emailList, textField])
    setTextField('')
    onSuccess()

    // TODO: send email to our email list
  }

  const onChange = (e) => {
    setTextField(e.target.value)
  }

  return {
    textField,
    errorMessage,
    onSubmit,
    onChange,
  }
}

export default useEmailTextField
