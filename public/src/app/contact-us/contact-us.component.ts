import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.contactUsForm = this.formBuilder.group({
      wholeName: ['', Validators.required],
      cellNumber: ['', Validators.required],
      emailAddr: ['', Validators.required],
      question: ['', Validators.required]
    });
  }
  onSubmit(){
    alert("Form Submitted!")
  }

}
export class MessageInfo {
  wholeName: string;
  cellNumber: string;
  emailAddr: string;
  question: string;
}