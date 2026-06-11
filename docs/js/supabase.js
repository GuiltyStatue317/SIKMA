import { createClient }
from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
    'URL_PROJECT',
    'ANON_KEY'
)
