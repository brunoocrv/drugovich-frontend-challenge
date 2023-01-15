import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

	private url: string = 'https://demo4231135.mockable.io/'

  constructor(
		private http: HttpClient
	) { }

	get getAllClients():Observable<any> {
		return this.http.get<any>(this.url).pipe(
			tap(res => {
				// Deixei o service preparado para receber o fluxo, porém a URL fornecida retorna um erro de JSON na requisição, então deixei os values setados
        // em um array no .ts  do component mesmo
        return res;
			})
		);
	}
}
