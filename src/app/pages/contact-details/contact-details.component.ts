import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription, map, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { UserService } from '../../services/user.service';
import { Move } from '../../models/user.model.ts';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private userService = inject(UserService)

  subscription!: Subscription

  contact$!: Contact
  isAbleToTransfer = true

  movesList$ = this.userService.loggedInUser$.pipe(
    map(contact => contact.moves?.filter(move => move.toId === this.contact$._id) || [])
  )

  amount!: number | ''

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data
      .pipe(map(data => data['contact']))
      .subscribe(contact => this.contact$ = contact)
  }

  onBack() {
    this.router.navigateByUrl('/contact')

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  onCoinTransfer() {
    if (this.amount) {
      const user = this.userService.getLoggedInUser()
      if (user.coins < this.amount) {
        this.isAbleToTransfer = false
      } else {
        this.isAbleToTransfer = true
        this.userService.addMove(this.contact$, this.amount as number)
        this.amount = ''
      }
    }
  }
}
