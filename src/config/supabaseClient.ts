import { createClient } from '@supabase/supabase-js'
import Config from "react-native-config"

const supabaseUrl = Config.REACT_NATIVE_SUPABASE_URL
const supabaseKey = Config.REACT_NATIVE_APP_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Variáveis de ambiente do Supabase não estão definidas.');
  }
  
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;