// import { createClient } from '@supabase/supabase-js';
// import * as dotenv from 'dotenv';
// dotenv.config();

// const { SUPABASE_URL, SUPABASE_KEY } = process.env;

// if (!SUPABASE_URL || !SUPABASE_KEY) {
//   throw new Error('SUPABASE_URL or SUPABASE_KEY is missing');
// }

// export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =  "https://zvpeyrscwktctocbbulg.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2cGV5cnNjd2t0Y3RvY2JidWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMTk1MzYsImV4cCI6MjA1Nzg5NTUzNn0.9yV_ZYk-Z7At4R_awZf1po6-8Ftn1Z1cRDoUwixa8Qk"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);