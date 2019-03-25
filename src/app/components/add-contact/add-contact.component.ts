import { Component, OnInit } from '@angular/core';
import { Contact } from './../../model/contact';
import { Router } from '@angular/router';
import { PhonebookService } from './../../services/phonebook.service';


@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
    contact: Contact;
  
    constructor(private router: Router, private service: PhonebookService) { }
  
    ngOnInit() {
        this.contact  = new Contact();
    }
  
    addContact(){
        this.service.addNewContact(this.contact).subscribe(contact => {
            console.log('Added : '+contact.id);
            this.router.navigate(['/contact-details', contact.id]);
        });
    }
}
