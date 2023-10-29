import Button from "../../ui/Button";
import CreateProductForm from "./CreateProductForm";
import Modal from "../../ui/Modal";

export default function AddProduct() {
  // const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    // <div>
    //   <Button onClick={() => setIsOpenModal((show) => !show)}>
    //     add new Cabin
    //   </Button>
    //   {/* {showForm && <CreateProductForm />} */}
    //   {isOpenModal && <Modal />}
    // </div>
    <Modal>
      <Modal.Open opens="product-form">
        <Button $variation="primary">Add a new Product </Button>
      </Modal.Open>
      <Modal.Window name="product-form">
        <CreateProductForm />
      </Modal.Window>
    </Modal>
  );
}
