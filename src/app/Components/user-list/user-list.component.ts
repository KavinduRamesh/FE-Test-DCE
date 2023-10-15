import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../user.service'; 
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'delete'];
  userList!: MatTableDataSource<any>;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private snackBar: MatSnackBar 
  ) {}

  ngOnInit() {
    this.fetchUserList();
  }

  fetchUserList() {
    this.http.get('https://reqres.in/api/users').subscribe((data: any) => {
      this.userList = new MatTableDataSource(data.data);
    });
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.snackBar.open('User deleted successfully', 'Close', {
          duration: 2000,
        });

        this.fetchUserList();
      },
      (error) => {
        this.snackBar.open('Error deleting user', 'Close', {
          duration: 2000,
        });

        console.error('Error deleting user:', error);
      }
    );
  }
}
