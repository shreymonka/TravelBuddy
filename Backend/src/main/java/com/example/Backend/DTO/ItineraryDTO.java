package com.example.Backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ItineraryDTO {
    private Long id;
    private String category;
    private String detail1;
    private String detail2;
    private String detail3;
}
