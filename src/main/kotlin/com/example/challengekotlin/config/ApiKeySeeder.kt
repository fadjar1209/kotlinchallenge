package com.example.challengekotlin.config

import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.stereotype.Component
import com.example.challengekotlin.entity.ApiKey
import com.example.challengekotlin.repository.ApiKeyRepository

@Component
class ApiKeySeeder(val apiKeyRepository: ApiKeyRepository) : ApplicationRunner {

    val apiKey = "KEYRAMA"

    override fun run(args: ApplicationArguments?) {
        if (!apiKeyRepository.existsById(apiKey)) {
            val entity = ApiKey(id = apiKey)
            apiKeyRepository.save(entity)
        }
    }
}