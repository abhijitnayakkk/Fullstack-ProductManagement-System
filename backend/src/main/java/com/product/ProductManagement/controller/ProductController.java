package com.product.ProductManagement.controller;

import org.springframework.web.bind.annotation.RestController;

import com.product.ProductManagement.model.Product;
import com.product.ProductManagement.service.ProductService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
// import org.hibernate.mapping.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @PostMapping("/create")
    public Product saveProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @GetMapping("/read")
    public List<Product> readProduct() {
        return productService.getAllProducts();
    }
    
    @GetMapping("/read/{id}")
    public Product readProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @PutMapping("/update/{id}")
    public Product editProduct(@PathVariable int id ,@RequestBody Product product){
        return productService.updateProduct(id, product);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable int id){
        return productService.deleteProduct(id);
    }
}
