package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	@Autowired
	private MovieRepository movieRep;
	
	@Autowired
	private UserRepository userRep;
	
	@Autowired
	private ScoreRepository scoreRep;
	
	@Transactional
	public MovieDTO saveScore(/*1. */ScoreDTO dto) {
		//2. Recuperar usuário do banco de dados pelo email. Se o usuário não existir, insira no banco.
		User user = userRep.findByEmail(dto.getEmail());
		if(user==null) {
			user=new User();
			user.setEmail(dto.getEmail());
			user = userRep.saveAndFlush(user);
		}
		
		Movie movie = movieRep.findById(dto.getMovieId()).get();
		
		// 3. Salvar a avaliação do usuário para o dado filme.
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		score = scoreRep.saveAndFlush(score); 
		
		// 4. Recalcular a avaliação média do filme e salvar no banco de dados.
		double sum =0.0;
		for(Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}
		
		double media = sum / movie.getScores().size();
		movie.setScore(media);
		movie.setCount(movie.getScores().size());
		
		movie = movieRep.save(movie);
		
		return new MovieDTO(movie); // retorna o movie em dto
	}
	
}
