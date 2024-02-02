import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  createNewUser(body: any) {
    return this.http.post(`http://localhost:8998/api/users/signup`, body).pipe(map((res: any) => {
      return res


    }))
  }

}
