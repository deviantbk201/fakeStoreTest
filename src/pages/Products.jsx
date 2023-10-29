import ProductsTable from "../features/products/ProductsTable";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import ProductTableOperations from "../features/products/ProductsTableOperations";

import AddProduct from "../features/products/AddProduct";

export default function Products() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Products</Heading>
        <ProductTableOperations />
      </Row>
      <Row type="vertical">
        <ProductsTable />
        <AddProduct />
      </Row>
    </>
  );
}
