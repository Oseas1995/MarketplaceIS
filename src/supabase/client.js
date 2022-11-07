import {createClient} from '@supabase/supabase-js';


export const supabase = createClient (
   'https://ljwnecrpusmarszkcaix.supabase.co' ,
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqd25lY3JwdXNtYXJzemtjYWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY4MDI0NDgsImV4cCI6MTk4MjM3ODQ0OH0.84y07ZJ960NocvuEu4vhE4QTD6wdfyiOxxBJe0Jl6tY')