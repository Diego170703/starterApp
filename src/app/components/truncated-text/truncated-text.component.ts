import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-truncated-text',
  templateUrl: './truncated-text.component.html',
  styleUrls: ['./truncated-text.component.scss'],
})
export class TruncatedTextComponent {

  @Input() text!: string;
  @Input() limit: number = 40;
  truncating = true;

}
