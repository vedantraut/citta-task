package com.citta.ctta_backend.model;

import java.util.List;

import com.citta.ctta_backend.dto.PageResponse;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class User {
	 private Long id;
	 private String name;
	 private String email;
	 private Integer age;
}
