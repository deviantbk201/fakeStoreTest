import styled from "styled-components";
import { formatFromISO } from "../../utils/helpers";
import { formatCurrency } from "../../utils/helpers";
import Table from "../../ui/Table";
import { useDeleteProduct } from "./useDeleteProduct";
import Row from "../../ui/Row";
import CreateProductForm from "./CreateProductForm";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import {
  HiOutlineInformationCircle,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

export default function ProductsTableRow({ product }) {
  const {
    id: productId,
    name,
    description,
    category,
    image,
    price,
    createdAt,
  } = product;
  const { isDeletingProduct, deleteProduct } = useDeleteProduct();
  const navigate = useNavigate();
  return (
    <Row type="vertical">
      <Table.Row role="row">
        <div>{<Img src={image} />}</div>
        <div>{formatFromISO(createdAt)}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{category}</div>
        <div>{formatCurrency(price)}</div>
        <Modal>
          {/* meunu toggle btn*/}
          <Menus.Toggle id={productId} />
          {/* actual menu that contains menu buttons */}
          <Menus.List id={productId}>
            <Menus.Button
              icon={<HiOutlineInformationCircle />}
              onClick={() => navigate(`/products/${productId}`)}
            >
              See details
            </Menus.Button>
            <Modal.Open opens="edit">
              <Menus.Button icon={<HiOutlinePencil />}>
                Edit Product
              </Menus.Button>
            </Modal.Open>
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiOutlineTrash />}>
                Delete Product
              </Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName={name}
              onConfirm={() => deleteProduct(productId)}
              disabled={isDeletingProduct}
            />
          </Modal.Window>

          <Modal.Window name="edit">
            <CreateProductForm productToEdit={product} />
          </Modal.Window>
        </Modal>
      </Table.Row>
    </Row>
  );
}
