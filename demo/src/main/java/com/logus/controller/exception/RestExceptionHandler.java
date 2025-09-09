package com.logus.controller.exception;

import com.logus.service.JaExisteConsultaException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(JaExisteConsultaException.class)
    public ResponseEntity<ApiError> handleRegraDeNegocioException(JaExisteConsultaException ex) {
    	ApiError error = new ApiError(ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.CONFLICT);
    }
}