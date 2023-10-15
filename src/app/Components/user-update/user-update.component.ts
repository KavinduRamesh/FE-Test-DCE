import { Component } from '@angular/core';
// import { UserService } from '../../user.service';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {
  // firstName: string = '';
  // lastName: string = '';
  // email: string = '';
  // password: string = '';

  // // Define the userId variable with an example value (replace with the actual user ID)
  // userId: number = 123; // Replace '123' with the actual user ID

  // constructor(private userService: UserService) {}

  // // Function to handle user update
  // updateUser() {
  //   // Create an object with updated user details
  //   const updatedUser = {
  //     firstName: this.firstName,
  //     lastName: this.lastName,
  //     email: this.email,
  //     password: this.password,
  //   };

  //   // Use the UserService to send an update request
  //   this.userService.updateUser(this.userId, updatedUser)
  //     .subscribe(
  //       (response) => {
  //         console.log('User details updated:', response);
  //         // Handle success, e.g., show a success message
  //       },
  //       (error) => {
  //         console.error('User details update failed:', error);
  //         // Handle errors, e.g., show an error message
  //       }
  //     );
  // }
}