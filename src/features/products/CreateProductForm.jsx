import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useCreateProduct } from "./useCreateProduct";
import FormRow from "../../ui/FormRow";
import { useEditProduct } from "./useEditProduct";
import { useUser } from "../authentication/useUser";

const Select = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function CreateProductForm({ productToEdit = {}, onCloseModal }) {
  const { createProduct, isCreatingProduct } = useCreateProduct();
  const { editProduct, isEditingProduct } = useEditProduct();
  const { id: editId, ...editValues } = productToEdit;
  const isEditSession = Boolean(editId);
  const isWorking = isCreatingProduct || isEditingProduct;
  const { user } = useUser() || {};
  const userId = user?.id;
  console.log(String(userId), "create");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    reValidateMode: "onSubmit",
    mode: "onBlur",
    defaultValues: isEditSession ? editValues : {},
  });
  function onSubmit(data) {
    const image =
      typeof data.image === "string" ? data.image : data.image.item[0];
    if (isEditSession) {
      editProduct(
        // idk lastEdited by might create a bug
        { newProduct: { ...data, image: image, lastEditedBy: userId }, editId },
        {
          onSuccess: () => {
            onCloseModal?.();
            reset();
          },
        }
      );
    }
    if (!isEditSession) {
      createProduct(
        { ...data, image: data.image.item(0) },
        {
          onSuccess: () => {
            onCloseModal?.();
            reset();
          },
        }
      );
    }
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "this is a required field" })}
        />
      </FormRow>
      <FormRow label="Price" error={errors?.price?.message}>
        <Input
          type="number"
          id="price"
          {...register("price", { required: "this is a required field" })}
        />
      </FormRow>
      <Input
        type="hidden"
        id={"addedBy"}
        {...register("addedBy")}
        value={userId}
      />
      <Input
        type="hidden"
        id={"lastEditedBy"}
        {...register("lastEditedBy")}
        value={userId}
      />
      <FormRow label="Descrition" error={errors?.description?.message}>
        <Textarea
          type="text"
          id="description"
          defaultValue=""
          {...register("description", { required: "this is a required field" })}
        />
      </FormRow>
      <FormRow label="category" error={errors?.category?.message}>
        <Select
          name="category"
          id="category"
          {...register("category", {
            required: "this is a required field",
          })}
        >
          <option value="">Please Select a category</option>

          <option value="fashion">Fashion</option>
          <option value="electronics">Electronics</option>
        </Select>
      </FormRow>
      <FormRow label="Product Image">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This  is  a required Field",
          })}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => {
            reset();
            onCloseModal?.();
          }}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Product" : "Add New Product"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateProductForm;
