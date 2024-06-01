package com.example.birthday.birthday;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BirthdayRepo extends JpaRepository<Birthday, Integer> {
    void deleteById(Integer id);
}
