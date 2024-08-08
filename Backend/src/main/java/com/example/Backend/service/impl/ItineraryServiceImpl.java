package com.example.Backend.service.impl;

import com.example.Backend.DTO.ItineraryDTO;
import com.example.Backend.model.Itinerary;
import com.example.Backend.repository.ItineraryRepository;
import com.example.Backend.service.ItineraryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ItineraryServiceImpl implements ItineraryService {

    private final ItineraryRepository itineraryRepository;

    public Itinerary addItinerary(ItineraryDTO itineraryDTO) {
        Itinerary itinerary = new Itinerary();
        itinerary.setCategory(itineraryDTO.getCategory());
        itinerary.setDetail1(itineraryDTO.getDetail1());
        itinerary.setDetail2(itineraryDTO.getDetail2());
        itinerary.setDetail3(itineraryDTO.getDetail3());
        return itineraryRepository.save(itinerary);
    }

    public List<ItineraryDTO> getAllItineraries() {
        return itineraryRepository.findAll().stream()
                .map(itinerary -> new ItineraryDTO(
                        itinerary.getId(),
                        itinerary.getCategory(),
                        itinerary.getDetail1(),
                        itinerary.getDetail2(),
                        itinerary.getDetail3()))
                .collect(Collectors.toList());
    }

    public void deleteItinerary(Long id) {
        itineraryRepository.deleteById(id);
    }
}
