import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../user.service'; 


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  @Input() submitButtonText: string = 'Register';
  @Input() UserRegistration:string = 'Register Form'
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  registrationResponse: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.submitButtonText === 'Register') {
      const userData = {
        email: this.formData.email,
        password: this.formData.password
        
      };

      this.http.post('https://reqres.in/api/users', userData).subscribe(
        (response: any) => {
          if (response.id) {
            this.registrationResponse = `Registration successful. User ID: ${response.id}`;
            console.log("FormData",this.formData);//test

          } else {
            this.registrationResponse = 'Registration failed.';
          }
        },
        (error) => {
          this.registrationResponse = 'Registration failed.';
          console.error('Error:', error);
        }
      );
    } else if (this.submitButtonText === 'Update') {
      const userData = {
        email: this.formData.email,
        password: this.formData.password
      };

      const userId = 1; //test
      console.log("FormData",this.formData);//test
      

      this.http.put(`https://reqres.in/api/users/${this.formData.email}`, userData).subscribe(
        (response: any) => {
          if (this.formData.email) {
            this.registrationResponse = `Update successful. User ID: ${this.formData.email}`;
          } else {
            this.registrationResponse = 'Update failed.';
          }
        },
        (error) => {
          this.registrationResponse = 'Update failed.';
          console.error('Error:', error);
        }
      );
    }
  }
}