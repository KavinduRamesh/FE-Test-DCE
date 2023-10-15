import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { UserUpdateComponent } from './Components/user-update/user-update.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { NoteComponent } from './Components/note/note.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterFormComponent },
  { path: 'update', component: UserUpdateComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'note', component: NoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
