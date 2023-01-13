import { Component, OnInit } from '@angular/core';
import { IClientProps } from 'src/app/interfaces/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newClientButton: string = 'NEW';
  newButtonClass: string = 'primary';
  newButtonHasIcon: boolean = true;
  icon: string = 'assets/images/plus.svg';

  constructor () {}

  public clients: Array<IClientProps> = [
    {
        "id": 1,
        "name": "Auto-Peças Joaquim LTDA.",
        "cnpj": "000000000000000",
        "status": false
    },
    {
        "id": 2,
        "name": "Auto-Peças Carlinhos LTDA.",
        "cnpj": "000000000000000",
        "status": true
    },
    {
        "id": 3,
        "name": "Auto-Peças João LTDA.",
        "cnpj": "000000000000000",
        "status": true
    },
    {
        "id": 4,
        "name": "Auto-Peças Maria LTDA.",
        "cnpj": "000000000000000",
        "status": true
    },
]

  ngOnInit(): void {}
}
