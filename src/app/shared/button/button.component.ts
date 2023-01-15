import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() domClass: string = 'primary';
  @Input() hasIcon: boolean = false;
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() buttonType: string = '';

  constructor () {}

  ngOnInit(): void {

  }
}
