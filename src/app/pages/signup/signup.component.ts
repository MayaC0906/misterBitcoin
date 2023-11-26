import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {take} from 'rxjs'

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  private router = inject(Router)
  userService = inject(UserService)

  userName: string = ''

  onSaveUser() {
    this.userService.signup(this.userName)
    this.router.navigateByUrl('/')
    
  }
}
