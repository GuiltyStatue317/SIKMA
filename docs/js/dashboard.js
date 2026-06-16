import {
    getCurrentUser,
    getUserRole,
    logoutUser
} from './auth.js'

const user = await getCurrentUser()

if (!user) {
    window.location.href = './login.html'
}

const role = await getUserRole(user.id)

document.getElementById('userInfo').innerText =
    `Login sebagai: ${user.email}`

document.getElementById('roleInfo').innerText =
    `Role: ${role?.roles?.name ?? 'No Role'}`

document
.getElementById('logoutBtn')
.addEventListener('click', logoutUser)
