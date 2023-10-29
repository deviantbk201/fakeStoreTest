import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginWithGoogle } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.error(err.message);
      toast.error("There was trouble Loffing in try again");
    },
  });
  return { login, isLoading };
}
