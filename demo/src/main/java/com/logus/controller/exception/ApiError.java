package com.logus.controller.exception;

public class ApiError {
    private final String mensagem;

    public ApiError(String mensagem) {
        this.mensagem = mensagem;
    }

    public String getMensagem() {
        return mensagem;
    }
}