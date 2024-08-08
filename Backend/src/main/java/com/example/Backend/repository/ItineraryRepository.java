package com.example.Backend.repository;

import com.example.Backend.model.Itinerary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {
}
