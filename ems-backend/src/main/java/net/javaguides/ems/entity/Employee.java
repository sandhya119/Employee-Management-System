package net.javaguides.ems.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

//let us make this employee class as GP entity by using jp annotations 
@Entity
@Table(name="employees") //table details
public class Employee {

    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY) //FOR PRIMARY KEY GENERATION AND AUTO INCREEMENT FEATURE
    private Long id;
    //column mapping

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="email_id",nullable=false, unique = true)
    private String emailId;
}
