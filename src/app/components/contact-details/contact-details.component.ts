import { Component, OnInit } from '@angular/core';
import { Contact } from './../../model/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact;
  constructor() { }

  ngOnInit() {
    this.contact = new Contact;
    this.contact.id = 101;
    this.contact.firstName = 'Gulshan';
    this.contact.lastName = 'Kumar';
    this.contact.gender = 'Male';
    this.contact.email = 'abc@gmail.com';
    this.contact.phone = '1234567890';
    this.contact.dob = '1990-10-20';
    this.contact.city = 'Bengaluru';
    this.contact.state = 'Karnataka';
    this.contact.country = 'India';
  }

}
