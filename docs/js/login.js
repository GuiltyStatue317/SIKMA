import { loginUser } from './auth.js'

document
.getElementById('loginForm')
.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email =
        document.getElementById('email').value

    const password =
        document.getElementById('password').value

    const result = await loginUser(
        email,
        password
    )

    if (result.success) {
        window.location.href = './dashboard.html'
    } else {
        alert(result.message)
    }
})
