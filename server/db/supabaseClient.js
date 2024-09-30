import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_API_KEY);

// EXAMPLE
async function getTableData(tableName) {
    const { data } = await supabase.from(tableName).select();
    return data;
}
