package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	// faz a busca por email 
	// é padrão do JPA Repository
	User findByEmail(String email);
}
