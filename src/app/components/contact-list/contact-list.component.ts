import { Component, OnInit } from '@angular/core';
import { Contact } from './../../model/contact';
import { PhonebookService } from './../../services/phonebook.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
    contacts: Contact[];
    pageNumber = 1;

    constructor(private service: PhonebookService) { }
  
    ngOnInit() {
        this.service.getAllContactsPage(this.pageNumber).subscribe(data => this.contacts = data);
    }

    loadMoredata(){
        this.pageNumber++;
        this.service.getAllContactsPage(this.pageNumber).subscribe(data => this.contacts = [...this.contacts, ...data]);
    }

}
