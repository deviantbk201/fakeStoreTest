import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi } from "../../services/apiProducts";
import toast from "react-hot-toast";
export function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { mutate: deleteProduct, isLoading: isDeletingProduct } = useMutation({
    mutationFn: deleteProductApi,
    onSuccess: () => {
      toast.success("product was deleted as successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { deleteProduct, isDeletingProduct };
}
