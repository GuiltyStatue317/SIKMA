import { createClient }
from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
    'https://qiuiiumhgyfsiddiynov.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpdWlpdW1oZ3lmc2lkZGl5bm92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MjM2NjMsImV4cCI6MjA5NjM5OTY2M30.Z6IiuSrgc2xbvbeqC5YgYRWhqopqKd7pMPliDptozik'
)
