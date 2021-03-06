package com.example.challengekotlin.repository

import org.springframework.data.jpa.repository.JpaRepository
import com.example.challengekotlin.entity.Product

interface ProductRepository : JpaRepository<Product, String>{

}