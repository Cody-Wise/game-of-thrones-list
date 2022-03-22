const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmZ2JtZGt2cWJ2bGlhZXJndWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc2Mzg2NTUsImV4cCI6MTk2MzIxNDY1NX0.VyU9_hrFWQ13GXnm_YwMxhGCqRVI1VMlopV5PCqYqYI';


const SUPABASE_URL = 'https://afgbmdkvqbvliaergujk.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getHeroes(){

    const response = await client

        .from('got_characters')
        .get('*');

    return response.body;


}

export async function getHero(id){

    const response = await client

        .from('got_characters')
        .get('*')
        .match({ person_id: id })

        .single();

    return response.body;
}