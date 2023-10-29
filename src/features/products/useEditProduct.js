import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditProduct } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useEditProduct() {
  const queryClient = useQueryClient();
  const {
    mutate: editProduct,
    isLoading: isEditingProduct,
    error,
  } = useMutation({
    mutationFn: ({ newProduct, editId }) =>
      createEditProduct(newProduct, editId),
    onSuccess: () => {
      toast.success("Product was edited as successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      toast.error("Could not Edit Product");
      console.error(error.message);
    },
  });
  return { editProduct, isEditingProduct };
}
