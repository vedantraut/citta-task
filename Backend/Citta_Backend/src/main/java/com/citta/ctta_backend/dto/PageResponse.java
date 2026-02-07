package com.citta.ctta_backend.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PageResponse<T> {
	private List<T> rows;
    private long totalCount;
}
