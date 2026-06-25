/* ============================================================
   Supabase configuration
   ============================================================ */
const SUPABASE_URL  = 'https://xfvzdnkqltmjnrbltjiw.supabase.co';
const SUPABASE_KEY  = 'sb_publishable_OKzIEDhjDudS15hXaqBMRw_D5HkyNRh';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);
