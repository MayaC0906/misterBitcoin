import { Component, Input } from '@angular/core';
import { Move } from '../../models/user.model.ts';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrl: './moves-list.component.scss'
})
export class MovesListComponent {
  @Input() moves!:Move[] | null
  @Input() title!:boolean | string
}
