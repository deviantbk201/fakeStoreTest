import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useProducts() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  // if there is a pagination ==================>

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // filter ========================================================================>
  const filterValue = searchParams.get("category");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "category", value: filterValue };

  // sort=========================================================================>
  const sortByDefault = searchParams.get("sortBy") || "name-dsc";
  const [field, direction] = sortByDefault.split("-");
  const sortBy = { field, direction };

  // rEact query data function
  const {
    data: { data: products, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", filter, sortBy, page],
    queryFn: () => getProducts({ filter, sortBy, page }),
  });

  // Prefetching  next page using react query  if there is  a pagination or next page ==================>

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["products", filter, sortBy, page + 1],
      queryFn: () => getProducts({ filter, sortBy, page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["products", filter, sortBy, page - 1],
      queryFn: () => getProducts({ filter, sortBy, page: page - 1 }),
    });
  return { products, isLoading, error, count };
}
