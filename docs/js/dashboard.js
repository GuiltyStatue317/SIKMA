import {
    getCurrentUser,
    getUserRole,
    getProfile,
    logoutUser
} from './auth.js'

const user = await getCurrentUser()

if (!user) {
    window.location.href = './login.html'
}

const profile = await getProfile(user.id)
const role = await getUserRole(user.id)

document.getElementById('userInfo').innerText =
    `Name: ${profile.fullname}`

document.getElementById('emailInfo').innerText =
    `Email: ${profile.email}`

document.getElementById('roleInfo').innerText =
    `Role: ${role?.roles?.name ?? 'No Role'}`

document
.getElementById('logoutBtn')
.addEventListener('click', logoutUser)
