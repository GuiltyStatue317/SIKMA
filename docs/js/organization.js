import { supabase } from './db.js'
import { getCurrentUser } from './auth.js'

export async function createOrganization(payload) {
    const user = await getCurrentUser()

    const { data, error } = await supabase
        .from('organizations')
        .insert([
            {
                ...payload,
                created_by: user.id
            }
        ])
        .select()
        .single()

    if (error) {
        console.error(error)
        return null
    }

    return data
}


export async function getOrganizations() {
    const { data, error } = await supabase
        .from('organizations')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error(error)
        return []
    }

    return data
}


export async function joinOrganization(orgId, position = 'Member') {
    const user = await getCurrentUser()

    const { data, error } = await supabase
        .from('organization_members')
        .insert([
            {
                organization_id: orgId,
                user_id: user.id,
                position,
                join_date: new Date().toISOString().split('T')[0]
            }
        ])

    if (error) {
        console.error(error)
        return false
    }

    return true
}


export async function getMyOrganizations() {
    const user = await getCurrentUser()

    const { data, error } = await supabase
        .from('organization_members')
        .select(`
            *,
            organizations(*)
        `)
        .eq('user_id', user.id)

    if (error) {
        console.error(error)
        return []
    }

    return data
}
