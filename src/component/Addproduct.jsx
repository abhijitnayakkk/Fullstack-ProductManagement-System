import React, { useState } from "react"
import ProductService from "../service/ProductService";

const Addproduct = () => {
    const [Product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: "",
    });

    const [msg,setMsg]=useState("");
    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...Product, [e.target.name]: value });
    }
    const productRegister= (e)=>{
        e.preventDefault();
        console.log(Product);
    
    ProductService.saveProduct(Product).then((res) =>{
        console.log("product added successfully");
        setMsg("Product added Successfully");
        setProduct({
            productName: "",
            description: "",
            price: "",
            status: "",
        });

    }).catch((err)=>{
        console.log(err);
    });
};

    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                Add Product
                            </div>
                            {
                                msg &&
                                <p className="fs-4 text-center text-success">{msg}</p>
                            }
                            <div className="card-body">
                                <form onSubmit={(e)=> productRegister(e)}>
                                    <div className="mb-3">
                                        <label>Enter Product Name</label>
                                        <input type="text" name="productName" className="form-control" 
                                        onChange={(e)=>handleChange(e)}
                                        value={Product.productName}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Description</label>
                                        <input type="text" name="description" className="form-control"
                                         onChange={(e)=>handleChange(e)}
                                         value={Product.description}
                                         />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Price</label>
                                        <input type="text" name="price" className="form-control" 
                                        onChange={(e)=>handleChange(e)}
                                        value={Product.price}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Status</label>
                                        <input type="text" name="status" className="form-control"
                                         onChange={(e)=>handleChange(e)}
                                         value={Product.status}
                                         />
                                    </div>
                                    <button className="btn btn-primary col-md-12">
                                        Submit
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Addproduct