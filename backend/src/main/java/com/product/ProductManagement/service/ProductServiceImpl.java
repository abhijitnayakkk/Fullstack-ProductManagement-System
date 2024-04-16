package com.product.ProductManagement.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.product.ProductManagement.Repository.ProductRepository;
import com.product.ProductManagement.model.Product;

import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor
@Service
public class ProductServiceImpl implements ProductService {

      private final ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
       return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
   }

    @Override
    public Product getProductById(int id) {
        return productRepository.findById(id).get();
     }

    @Override
    public String deleteProduct(int id) {
       var product= productRepository.findById(id).get();
       if(product!=null){
        productRepository.delete(product);
       }
       return "product delete successfully";
    }

   @Override
   public Product updateProduct(int id, Product product) {
        var p=productRepository.findById(id).get();
        p.setProductName(product.getProductName());
        p.setDescription(product.getDescription());
        p.setPrice(product.getPrice());
        p.setStatus(product.getStatus());
        return productRepository.save(p);

   
   }
    
    
}
