package com.example.Backend.service;

import com.example.Backend.DTO.ItineraryDTO;
import com.example.Backend.model.Itinerary;
import com.example.Backend.repository.ItineraryRepository;

import java.util.List;

public interface ItineraryService {

    Itinerary addItinerary(ItineraryDTO itineraryDTO);
    List<ItineraryDTO> getAllItineraries();
    void deleteItinerary(Long id);

}
