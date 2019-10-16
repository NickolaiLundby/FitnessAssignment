import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  registerUser(user){
    return this.httpClient.post('http://localhost:4200/register/', user).pipe(map((response: Response) => response.json()));
  }
}
