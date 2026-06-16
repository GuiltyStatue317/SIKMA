import { supabase } from './db.js'

export async function registerUser(fullname, email, password) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                fullname
            }
        }
    })

    if (error) {
        return {
            success: false,
            message: error.message
        }
    }

    return {
    success: true,
    user: data.user,
    session: data.session
    }
}


export async function loginUser(email, password) {
    const { data, error } =
        await supabase.auth.signInWithPassword({
            email,
            password
        })

    if (error) {
        return {
            success: false,
            message: error.message
        }
    }

    return {
        success: true,
        session: data.session
    }
}


export async function logoutUser() {
    await supabase.auth.signOut()
    window.location.href = './login.html'
}


export async function getCurrentUser() {
    const {
        data: { user }
    } = await supabase.auth.getUser()

    return user
}


export async function getSession() {
    const {
        data: { session }
    } = await supabase.auth.getSession()

    return session
}


export async function getUserRole(userId) {
    const { data, error } = await supabase
        .from('user_roles')
        .select(`
            role_id,
            roles(name)
        `)
        .eq('user_id', userId)
        .single()

    if (error) {
        console.error(error)
        return null
    }

    return data
}
