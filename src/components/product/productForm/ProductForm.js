import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./ProductForm.scss";

const ProductForm = ({
  product,
  imagePreview,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="add-product">
      <Card cardClass="card">
        <form onSubmit={saveProduct}>
          <div className="form-parent">
            <div className="prod-details">
              <span>
                <label>Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={product?.name}
                  onChange={handleInputChange}
                />
              </span>

              <span>
                <label>Product Category</label>
                <input
                  type="text"
                  name="category"
                  value={product?.category}
                  onChange={handleInputChange}
                />
              </span>

              <span>
                <label>Product Price</label>
                <input
                  type="text"
                  name="price"
                  placeholder="example: 10000"
                  value={product?.price}
                  onChange={handleInputChange}
                />
              </span>

              <span>
                <label>Product Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={product?.quantity}
                  onChange={handleInputChange}
                />
              </span>
            </div>
            <div className="prod-details-2">
              <Card cardClass={"group"}>
                <label>Product Image</label>
                <code className="--color-dark">
                  Supported Formats: jpg, jpeg, png
                </code>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => handleImageChange(e)}
                />

                {imagePreview != null ? (
                  <div className="image-preview">
                    <img src={imagePreview} alt="product" />
                  </div>
                ) : (
                  <p>No image set for this poduct.</p>
                )}
              </Card>
              <span>
                <label style={{ marginBottom: "8px" }}>
                  Product Description
                </label>
                <textarea
                  type="text"
                  name="desc"
                  value={product?.desc}
                  onChange={handleInputChange}
                />
              </span>
            </div>
          </div>
          <div className="--my btnsaveprod">
            <button type="submit" className="--btn --btn-secondary">
              Save Product
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ProductForm;
