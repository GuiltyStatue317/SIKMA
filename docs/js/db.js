import { createClient }
from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://qiuiiumhgyfsiddiynov.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_owiPdxbndHigPJB0GUM9Qw_6aODGENr'

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
)
