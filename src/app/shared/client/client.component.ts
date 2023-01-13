import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  editClientButton: string = 'EDIT';
  editClientButtonClass: string = 'secondary';

  @Input() clientName: string = '';
  @Input() clientCNPJ: string = '';
  @Input() isActive: boolean = false;
}
