import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BitCoinService } from '../../services/bit-coin.service.js';
import { map, Subscription, take } from 'rxjs';
import { UserService } from '../../services/user.service.js';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnDestroy, OnInit {
  bitCoinService = inject(BitCoinService)
  userService = inject(UserService)

  user =  this.userService.getLoggedInUser()
  BitCoinRate!: number 
  subscription!: Subscription

  movesList$ = this.userService.loggedInUser$.pipe(
    map(contact => contact.moves?.slice(0,3))
  )
  ngOnInit() {
    this.subscription = this.bitCoinService.getBitCoinRate()
      .pipe(take(1))
      .subscribe(rate => {
        this.BitCoinRate = rate
      })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe?.()
  }
}
