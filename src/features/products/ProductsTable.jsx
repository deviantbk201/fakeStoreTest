import Spinner from "../../ui/Spinner";

import { useProducts } from "./useProductsData";
import toast from "react-hot-toast";
import ProductsTableRow from "./ProductsTableRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
export default function ProductsTable() {
  const { isLoading, products, error, count } = useProducts();
  if (error) return toast.error(error?.message);
  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table role="table" columns=" 0.6fr 1fr  1fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div>image</div>
          <div>Added on</div>
          <div>Name</div>
          <div>description</div>
          <div>category</div>
          <div>price</div>
        </Table.Header>
        <Table.Body
          data={products}
          render={(product) => (
            <ProductsTableRow product={product} key={product.id} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}
