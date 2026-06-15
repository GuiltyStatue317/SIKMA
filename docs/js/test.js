import { supabase } from './db.js'

const { data, error } = await supabase
    .from('roles')
    .select('*')

console.log(data)
console.log(error)
