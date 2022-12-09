import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ProductForm from "../../components/product/productForm/ProductForm";
import { toast } from "react-toastify";
import {
  createProduct,
  selectIsLoading,
} from "../../redux/features/product/productSlice";

const AddProduct = () => {
  const initialState = {
    name: "",
    category: "",
    quantity: "",
    price: "",
    desc: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialState);
  const [productImage, setProductImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const isLoading = useSelector(selectIsLoading);

  const { name, category, price, quantity, desc } = product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    if (!name || !category || !price || !quantity || !desc) {
      return toast.error("All fields are required");
    }

    //Handle Image Upload
    let imageURL;
    if (
      productImage &&
      (productImage.type === "image/jpeg" ||
        productImage.type === "image/jpg" ||
        productImage.type === "image/png")
    ) {
      const image = new FormData();
      image.append("file", productImage);
      image.append("cloud_name", "dyd6yggca");
      image.append("upload_preset", "pawpatrol10");

      // First save image to cloudinary
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dyd6yggca/image/upload",
        { method: "post", body: image }
      );
      const imgData = await response.json();
      imageURL = imgData.url.toString();
    }

    const newProduct = {
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      desc: product.desc,
      image: imageURL,
    };

    console.log(newProduct);

    try {
      await dispatch(createProduct(newProduct));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt">Add New Product</h3>
      <ProductForm
        product={product}
        imagePreview={imagePreview}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveProduct={saveProduct}
      />
    </div>
  );
};

export default AddProduct;
