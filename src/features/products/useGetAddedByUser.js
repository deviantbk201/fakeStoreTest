import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductsAddedByUser } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { useUser } from "../authentication/useUser";

export function useGetAddedByUser() {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const queryClient = useQueryClient();
  const {
    user: { id: userId },
  } = useUser();
  const { data: { data: productsByUser, count } = {}, isLoading } = useQuery({
    queryFn: () => getProductsAddedByUser({ userId, page }),
    queryKey: ["productsByUser", userId, "products", page],
  });
  // Prefetching  next page using react query  if there is  a pagination or next page ==================>

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["productsByUser", page + 1],
      queryFn: () => getProductsAddedByUser({ userId, page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["products", page - 1],
      queryFn: () => getProductsAddedByUser({ userId, page: page - 1 }),
    });
  return { productsByUser, isLoading, count };
}
