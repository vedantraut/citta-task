package com.citta.ctta_backend.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import com.citta.ctta_backend.model.User;

public class MockDataGenerator {
	
	public static List<User> generateUsers(int count) {
        List<User> users = new ArrayList<>();
        Random random = new Random();

        for (int i = 1; i <= count; i++) {
            users.add(new User(
                    (long) i,
                    "User " + i,
                    "user" + i + "@mail.com",
                    20 + random.nextInt(25)
            ));
        }
        return users;
    }

}
