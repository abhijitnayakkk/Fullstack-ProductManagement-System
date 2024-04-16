package com.product.ProductManagement.service;

import java.util.List;

import com.product.ProductManagement.model.Product;

public interface ProductService {
    public Product saveProduct(Product product);
    public List<Product> getAllProducts();
    public Product getProductById(int id);
    public String deleteProduct(int id);
    public Product updateProduct(int id,Product product);

}
