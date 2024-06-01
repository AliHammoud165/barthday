package com.example.birthday.birthday;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "B_day")
public class Birthday {
    @GeneratedValue
    @Id
    private Integer id;

    private  String name;
    private Integer age;


    public Birthday(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Birthday() {
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
