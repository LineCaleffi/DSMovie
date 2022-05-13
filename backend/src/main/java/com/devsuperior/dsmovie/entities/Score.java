package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="tb_score")
public class Score {
	// chave composta tem que ter uma classe auxiliar
	@EmbeddedId //pq é composto
	private ScorePK id = new ScorePK(); // no ScorePK tem movie e user
	
	private Double value;
	
	public Score() {}
	
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	
	public void setUser(User user) {
		id.setUser(user);;
	}
	
	public ScorePK getId() {
		return id;
	}
	
	public void setId(ScorePK id) {
		this.id = id;
	}
	
	public Double getValue() {
		return value;
	}
	
	public void setValue(Double value) {
		this.value = value;
	}	
}
