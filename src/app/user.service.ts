import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://reqres.in/api/users';
  userData: any[] = [];

  constructor(private http: HttpClient) {}
  private users: any[] = [];

  addUser(user: any) {
    this.users.push(user);
  }
  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}${userId}`;
    return this.http.delete(url);
  }

  updateUser(userId: number, updatedUser: any) {
    return this.http.put(`${this.apiUrl}/${userId}`, updatedUser);
  }
 
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
    createUsers() {
    return this.http.get(`${this.apiUrl}`);
  
}
}
