package com.example.challengekotlin.controller

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestControllerAdvice
import com.example.challengekotlin.error.NotFoundException
import com.example.challengekotlin.error.UnauthorizedException
import com.example.challengekotlin.model.WebResponse
import javax.validation.ConstraintViolationException
import org.springframework.web.bind.annotation.CrossOrigin as CrossOrigin1

@CrossOrigin1(origins = ["*"], allowedHeaders = ["*"])
@RestControllerAdvice
class ErrorController {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(value = [ConstraintViolationException::class])
    fun validationHandler(constraintViolationException: ConstraintViolationException): WebResponse<String> {
        return WebResponse(
                code = 400,
                status = "BAD REQUEST",
                data = constraintViolationException.message!!
        )
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(value = [NotFoundException::class])
    fun notFound(notfoundException: NotFoundException): WebResponse<String> {
        return WebResponse(
                code = 404,
                status = "NOT FOUND",
                data = "Not Found"
        )
    }

    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(value = [UnauthorizedException::class])
    fun unauthorized(unauthorizedException: UnauthorizedException): WebResponse<String> {
        return WebResponse(
                code = 401,
                status = "UNAUTHORIZED",
                data = "Please put your X-Api-Key"
        )
    }

}