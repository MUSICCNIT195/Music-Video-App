import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  emailForm: FormGroup;
  submitted = false;
  ok = false;
  constructor(private myformBuilder: FormBuilder) {
    this.emailForm = this.myformBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.emailForm.invalid) {
      return; /* no code will be executed after this point */
    }
    this.ok = true;
  }
  ngOnInit(): void {}
}
