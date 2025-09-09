package com.logus.repositorio;

import com.logus.model.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ConsultaRepositorio extends JpaRepository<Consulta, Long> {

    boolean existsByNomePacienteAndDataHoraBetween(String nomePaciente, LocalDateTime inicioDoDia, LocalDateTime fimDoDia);

    List<Consulta> findByDataHoraBetweenOrderByDataHoraAsc(LocalDateTime inicioDoDia, LocalDateTime fimDoDia);
    
    List<Consulta> findAllByOrderByDataHoraAsc();
}