package com.example.birthday.birthday;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Birthdaycontroler {
   private final BirthdayRepo birthdayRepo;

@Autowired
    public Birthdaycontroler(BirthdayRepo birthdayRepo) {
        this.birthdayRepo = birthdayRepo;
    }

@GetMapping("/birthday")
    public List<Birthday> getalll(){
        return birthdayRepo.findAll();
}

@PostMapping("/birthday")
public Birthday post(

       @RequestBody Birthday b1
)
{
        return birthdayRepo.save(b1);
}
@DeleteMapping("/birthday")
    public void deletebyidd(
           @RequestBody Integer id){
        birthdayRepo.deleteById((Integer) id);

}
    @DeleteMapping("/birthday/deleteAll")
    public void deleteAll() {
        birthdayRepo.deleteAll();
    }

}
