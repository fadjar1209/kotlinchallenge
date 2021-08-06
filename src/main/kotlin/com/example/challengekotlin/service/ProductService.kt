package com.example.challengekotlin.service

import com.example.challengekotlin.model.CreateProductRequest
import com.example.challengekotlin.model.ListProductRequest
import com.example.challengekotlin.model.ProductResponse
import com.example.challengekotlin.model.UpdateProductRequest

interface ProductService {

    fun create(createProductRequest: CreateProductRequest): ProductResponse

    fun get(id: String): ProductResponse

    fun update(id: String, updateProductRequest: UpdateProductRequest): ProductResponse

    fun delete(id: String)

    fun list(listProductRequest: ListProductRequest): List<ProductResponse>

}