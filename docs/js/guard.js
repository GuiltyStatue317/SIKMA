import {
    getCurrentUser,
    getUserRole
} from './auth.js'

export async function requireAuth() {
    const user = await getCurrentUser()

    if (!user) {
        window.location.href = './login.html'
        return null
    }

    return user
}

export async function requireRole(allowedRoles = []) {
    const user = await requireAuth()

    if (!user) return null

    const role = await getUserRole(user.id)

    if (!role) {
        alert('No role assigned.')
        window.location.href = './dashboard.html'
        return null
    }

    const roleName = role.roles.name

    if (!allowedRoles.includes(roleName)) {
        alert('Access denied.')
        window.location.href = './dashboard.html'
        return null
    }

    return {
        user,
        role
    }
}
