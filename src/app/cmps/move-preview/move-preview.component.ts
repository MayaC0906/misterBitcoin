import { Component, Input } from '@angular/core';
import { Move } from '../../models/user.model.ts';

@Component({
  selector: 'move-preview',
  templateUrl: './move-preview.component.html',
  styleUrl: './move-preview.component.scss'
})
export class MovePreviewComponent {
  @Input() move!:Move | null | undefined
  @Input() title!:boolean | string

ngOnInit(){
  console.log(typeof this.title);
  
}
}
