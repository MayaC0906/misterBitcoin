import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { ContactService } from '../services/contact.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'misterBITcoin';
  private contactService = inject(ContactService)
  private userService = inject(UserService)
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.contactService.loadContacts()
      .pipe(take(1))
      .subscribe({
        error: err => console.log('err:', err)
      })

    this.userService.query()

  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe?.()
  }
}
