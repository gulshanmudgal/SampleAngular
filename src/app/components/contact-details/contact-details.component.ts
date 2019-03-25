import { Component, OnInit } from '@angular/core';
import { Contact } from './../../model/contact';
import { PhonebookService } from './../../services/phonebook.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
    contact: Contact;

    constructor(private service: PhonebookService, private activatedRouter: ActivatedRoute, private router: Router ) { }
  
    ngOnInit() {
        this.activatedRouter.params.subscribe(paramsdata => {
            this.service.getContactDetails(paramsdata['id']).subscribe(
                data => this.contact = data)
        });

        console.log(this.contact);
    }

    deleteContact(){
        if(!confirm('Are you sure to delete?')){
            return;
        }

        this.service.deleteContact(this.contact.id).subscribe(() => {
            this.router.navigate(['/contact-list']);
        });
    }

}
