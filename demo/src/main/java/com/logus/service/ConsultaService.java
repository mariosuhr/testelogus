package com.logus.service;

import com.logus.model.Consulta;
import com.logus.repositorio.ConsultaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class ConsultaService {

    @Autowired
    private ConsultaRepositorio consultaRepositorio;

    public Consulta agendar(Consulta novaConsulta) {
    	LocalDate  diaDaConsulta = novaConsulta.getDataHora().toLocalDate();
    	LocalDateTime inicioDoDia = diaDaConsulta.atStartOfDay();
    	LocalDateTime fimDoDia = diaDaConsulta.atTime(LocalTime.MAX); 

    	boolean pacienteJaTemConsultaNoDia = consultaRepositorio.existsByNomePacienteAndDataHoraBetween(
            novaConsulta.getNomePaciente(),
            inicioDoDia,
            fimDoDia
        );

        if (pacienteJaTemConsultaNoDia) {
            throw new JaExisteConsultaException("Paciente já possui uma consulta agendada para este dia.");
        }

        return consultaRepositorio.save(novaConsulta);
    }

    public List<Consulta> listar(LocalDate dataFiltro) {
        if (dataFiltro != null) {
        	LocalDateTime  inicioDoDia = dataFiltro.atStartOfDay();
        	LocalDateTime  fimDoDia = dataFiltro.atTime(LocalTime.MAX); 
            return consultaRepositorio.findByDataHoraBetweenOrderByDataHoraAsc(inicioDoDia, fimDoDia);
        } else {
            return consultaRepositorio.findAllByOrderByDataHoraAsc();
        }
    }
}