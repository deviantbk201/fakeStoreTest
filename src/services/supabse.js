import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zgcgujdsomxqfncomntg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnY2d1amRzb214cWZuY29tbnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyMTcxMzgsImV4cCI6MjAxMzc5MzEzOH0.Q_IYbDHnUHVDz0fnZkhzypXqwkJkHZJSe0LpO_cROLc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
