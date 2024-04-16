import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../service/ProductService";

const Editproduct=() =>{
  const [Product, setProduct] = useState({
    id:"",
    productName: "",
    description: "",
    price: "",
    status: "",
});

const navigate = useNavigate();

const {id} = useParams();
console.log(id);

const [msg,setMsg]=useState("");

useEffect(() => {
  ProductService
  .getAllProductById(id)
  .then((res) => {
    setProduct(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
},[]);

const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...Product, [e.target.name]: value });
}
const productUpdate= (e)=>{
    e.preventDefault();
    console.log(Product);

ProductService.updateProduct(Product).then((res) =>{
    navigate("/");
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
                            Edit Product
                        </div>
                        {
                            msg &&
                            <p className="fs-4 text-center text-success">{msg}</p>
                        }
                        <div className="card-body">
                            <form onSubmit={(e)=> productUpdate(e)}>
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
                                    Update
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
  export default Editproduct