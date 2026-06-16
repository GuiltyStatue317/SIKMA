import { registerUser } from './auth.js'

const form = document.getElementById('registerForm')
const status = document.getElementById('status')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const fullname =
        document.getElementById('fullname').value.trim()

    const email =
        document.getElementById('email').value.trim()

    const password =
        document.getElementById('password').value

    status.innerText = 'Creating account...'

    const result = await registerUser(
        fullname,
        email,
        password
    )

    if (!result.success) {
        status.innerText = result.message
        return
    }

    status.innerText = 'Register success. Redirecting...'

    setTimeout(() => {
        window.location.href = './dashboard.html'
    }, 1000)
})
