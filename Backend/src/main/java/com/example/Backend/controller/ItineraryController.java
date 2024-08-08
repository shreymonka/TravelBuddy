package com.example.Backend.controller;

import com.example.Backend.DTO.ItineraryDTO;
import com.example.Backend.model.Itinerary;
import com.example.Backend.service.ItineraryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/itinerary")
@RequiredArgsConstructor
public class ItineraryController {

    private final ItineraryService itineraryService;

    @PostMapping("/add")
    public ResponseEntity<Itinerary> addItinerary(
            @RequestBody ItineraryDTO itineraryDTO) {
        Itinerary savedItinerary = itineraryService.addItinerary(itineraryDTO);
        return ResponseEntity.ok(savedItinerary);
    }

    @GetMapping("/all")
    public ResponseEntity<List<ItineraryDTO>> getAllItineraries() {
        List<ItineraryDTO> itineraries = itineraryService.getAllItineraries();
        return ResponseEntity.ok(itineraries);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteItinerary(@PathVariable Long id) {
        itineraryService.deleteItinerary(id);
        return ResponseEntity.noContent().build();
    }
}
