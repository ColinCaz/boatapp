package com.boatapp.api.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.boatapp.api.model.Boat;

@Repository
public interface BoatRepository extends CrudRepository<Boat, Long> {

}