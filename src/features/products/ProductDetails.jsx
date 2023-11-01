import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import ProductDataBox from "./ProductDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import ButtonText from "../../ui/ButtonText";
import Empty from "../../ui/Empty";
import { useProduct } from "./useProduct";
import { useDeleteProduct } from "./useDeleteProduct";
import CreateProductForm from "./CreateProductForm";
// import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../../hooks/useMoveBack";
const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;
//
//
//a BIG BUG THAT DOESNT LET YOU GO BAK FROM DETAILS PAGE >YOU CANT NAVIGATE TO _-1 otr-2 but -4 works
//
export default function ProductDetails() {
  const { product, isLoading } = useProduct();
  const { deleteProduct, isDeletingProduct } = useDeleteProduct();
  // console.log(window.history);
  // const navigate = useNavigate();
  // const moveBack = () => {
  //   navigate(-1);
  // };
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;
  if (!product) return <Empty resource="Product" />;
  const { id: productId } = product;
  // We return a fragment so that these elements fit into the page's layout
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading type="h1">Product #{productId}</Heading>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <ProductDataBox product={product} />

      <ButtonGroup>
        <Modal>
          <Modal.Open opens="delete">
            <Button $variation="danger">Delete Product</Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resource="Product"
              // These options will be passed wherever the function gets called, and they determine what happens next like navigation etc
              onConfirm={() =>
                deleteProduct(productId, {
                  onSettled: () => {
                    moveBack();
                  },
                })
              }
              disabled={isDeletingProduct}
            />
          </Modal.Window>
          <Modal.Open opens="editProduct">
            <Button $variation="primary">Edit Product</Button>
          </Modal.Open>

          <Modal.Window name="editProduct">
            <CreateProductForm productToEdit={product} />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}
