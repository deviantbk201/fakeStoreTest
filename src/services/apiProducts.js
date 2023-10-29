import { PAGE_SIZE } from "../utils/constants";
import supabase, { supabaseUrl } from "./supabse";

// get product by filter sort  or page=>
export async function getProducts({ filter, sortBy, page }) {
  let query = supabase.from("products").select("*", { count: "exact" });

  // if there is  a Filter ======>
  if (filter) query = query.eq(filter.field, filter.value);

  // if there is  asort ============
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  // if there is pagination=========>
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;

  if (error) {
    console.error(error.message);
    throw new Error("Could not Load Products");
  }

  return { data, count };
}

export async function deleteProduct(productId) {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", productId);
  if (error) throw new Error("Cabin could not be deleted");
}

// create Product=============================================================================================>
export async function createEditProduct(newProduct, editId) {
  const hasImagePath = newProduct.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newProduct.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newProduct.image
    : `${supabaseUrl}/storage/v1/object/public/Product%20Images/${imageName}`;
  //  https://zgcgujdsomxqfncomntg.supabase.co/storage/v1/object/public/Product%20Images
  //yamahaTenere2.jpg

  // we create a product ==>\
  let query = supabase.from("products");
  // i f there is no edit id create =>
  if (!editId)
    query = query.insert([{ ...newProduct, image: imagePath }]).select();
  // if edit id edit =>
  if (editId)
    query = query.update({ ...newProduct, image: imagePath }).eq("id", editId);

  const { data, error } = await query;
  if (error) throw new Error("Cabin could not be created");
  //  if creating product is sucessfull then we  upload image to the bucket==>
  const { error: storageError } = await supabase.storage
    .from("Product Images")
    .upload(imageName, newProduct.image);

  // 3 . if error uploading the image the just delete the data  uploaded product and throw error
  if (storageError) {
    await supabase.from("products").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Error Uploading the product Image");
  }

  return data;
}

// get a singlle PRoduct=====?
export async function getProduct(productId) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Product not found");
  }

  return data;
}

// get PRoducts by You t ===========?

export async function getProductsAddedByUser({ userId, page }) {
  let query = supabase
    .from("products")
    .select("*", { count: "exact" })
    .eq("addedBy", userId);

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Error loading products ");
  }

  return { data, count };
}
