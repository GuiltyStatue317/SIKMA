import { requireRole } from './guard.js'

const access = await requireRole([
    'Root',
    'AdministratorCampus',
    'Administrator'
])

if (access) {
    document.getElementById('adminInfo').innerText =
        `Welcome ${access.user.email} (${access.role.roles.name})`
}
