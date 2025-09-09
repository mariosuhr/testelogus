package com.logus.controller;

import com.logus.model.Consulta;
import com.logus.service.ConsultaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/consultas")
@CrossOrigin(origins = "http://localhost:4200")
public class ConsultaController {

	@Autowired
	private ConsultaService consultaService;

	@PostMapping
	public ResponseEntity<Consulta> agendar(@RequestBody Consulta consulta) {
		Consulta novaConsulta = consultaService.agendar(consulta);
		return new ResponseEntity<>(novaConsulta, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Consulta>> listar(
			@RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate data) {

		List<Consulta> consultas = consultaService.listar(data);
		return ResponseEntity.ok(consultas);
	}
}