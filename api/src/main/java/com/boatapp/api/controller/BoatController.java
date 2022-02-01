package com.boatapp.api.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.boatapp.api.model.Boat;
import com.boatapp.api.service.BoatService;

@RestController
public class BoatController {
	@Autowired
	private BoatService boatService;

	@CrossOrigin
	@PostMapping("/boat")
	public Boat createBoat(@RequestBody Boat boat) {
		return boatService.saveBoat(boat);
	}

	@CrossOrigin
	@GetMapping("/boat/{id}")
	public Boat getBoat(@PathVariable("id") final Long id) {
		Optional<Boat> boat = boatService.getBoat(id);
		if (boat.isPresent()) {
			return boat.get();
		} else {
			return null;
		}
	}

	@CrossOrigin
	@GetMapping("/boats")
	public Iterable<Boat> getBoats() {
		return boatService.getBoats();
	}

	@CrossOrigin
	@PutMapping("/boat/{id}")
	public Boat updateBoat(@PathVariable("id") final Long id, @RequestBody Boat boat) {
		Optional<Boat> e = boatService.getBoat(id);
		if (e.isPresent()) {
			Boat currentBoat = e.get();

			String name = boat.getName();
			if (name != null) {
				currentBoat.setName(name);
			}
			String description = boat.getDescription();
			if (description != null) {
				currentBoat.setDescription(description);
			}
			int size = boat.getSize();
			if (size > 0) {
				currentBoat.setSize(size);
			}
			boatService.saveBoat(currentBoat);
			return currentBoat;
		} else {
			return null;
		}
	}

	@CrossOrigin
	@DeleteMapping("/boat/{id}")
	public void deleteBoat(@PathVariable("id") final Long id) {
		boatService.deleteBoat(id);
	}
}