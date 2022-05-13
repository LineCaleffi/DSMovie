package com.devsuperior.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.services.MovieService;

@RestController
@RequestMapping(value="/movies")
public class MovieController {
	@Autowired
	MovieService movServ;
	
	@GetMapping
	public Page<MovieDTO> findAll(Pageable pageable){
		return movServ.findAll(pageable);
	}
	// http://localhost:8080/movies?size=12 -> o tamanho da página com 12 elementos
	// http://localhost:8080/movies?size=12&page=1 -> pega a página 1 com 12 elementos

	@GetMapping(value = "/{id}")
	public MovieDTO findById(@PathVariable Long id){
		return movServ.findById(id);
	}
}
