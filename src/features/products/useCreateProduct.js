import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditProduct as createEditProductApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate: createProduct, isLoading: isCreatingProduct } = useMutation({
    mutationFn: createEditProductApi,
    onSuccess: () => {
      toast.success("Product created as sucessfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => toast.error("could not create product "),
  });

  return { createProduct, isCreatingProduct };
}
