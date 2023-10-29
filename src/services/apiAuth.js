import supabase from "./supabse";

export async function loginWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    throw new Error("Error Logging In");
  }
  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error("Error Logging Out");
  }
}

export async function getCurrentUser() {
  // gets active session data from local storage
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  // if there is active session fetch user data again from supabase==
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}
