package com.boatapp.api.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.boatapp.api.model.Boat;
import com.boatapp.api.repository.BoatRepository;
import lombok.Data;

@Data
@Service
public class BoatService {
	@Autowired
	private BoatRepository boatRepository;

	public Optional<Boat> getBoat(final Long id) {
		return boatRepository.findById(id);
	}

	public Iterable<Boat> getBoats() {
		return boatRepository.findAll();
	}

	public void deleteBoat(final Long id) {
		boatRepository.deleteById(id);
	}

	public Boat saveBoat(Boat boat) {
		Boat savedBoat = boatRepository.save(boat);
		return savedBoat;
	}
}