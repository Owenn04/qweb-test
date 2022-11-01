const form = document.querySelector('#contact-form')

form.addEventListener('submit', (event) => {
  const name = event.target.name.value
  const email = event.target.email.value
  const message = event.target.message.value
  const experience = event.target.experience.value


  const errorElement = document.querySelector('#error')

  let messages = []

  if (email === '' || email == null) {
    messages.push('Email is required')
  }

  if (email.includes('@') === false || email.includes('.') === false) {
    messages.push('Email is missing "." or "@"')
  }

  if (message === '' || message == null) {
    messages.push('Message is required')
  }

  if (experience === '') {
    messages.push('Experience rating required')
  }

  if (messages.length > 0) {
    event.preventDefault()
    errorElement.style.display = 'inline'
    errorElement.innerText = messages.join(', ')
  }
})