import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tpovckoqqamengxfrvai.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwb3Zja29xcWFtZW5neGZydmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0Mzk2NjgsImV4cCI6MjAzMTAxNTY2OH0.pGbdygF8ARZbcNmY44SfR4P94xHScjioy8j6h9AMJXQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
