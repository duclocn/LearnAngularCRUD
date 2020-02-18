import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      gender: 'Male',
      name: 'Mark',
      contactPreference: 'Email',
      email: 'mark@gmail.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/Mark.png'
    },
    {
      id: 2,
      gender: 'Female',
      name: 'Mary',
      contactPreference: 'Phone',
      phoneNumber: 1234567890,
      dateOfBirth: new Date('12/20/1987'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/Mary.png'
    },
    {
      id: 3,
      gender: 'Male',
      name: 'John',
      contactPreference: 'Phone',
      phoneNumber: 111111,
      dateOfBirth: new Date('2/20/1990'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/John.png'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
