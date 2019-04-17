import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { text } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {



  private baseUrl = '/api/customers';

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<object> {

    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  deleteCustomer(id: number): Observable<Object> {

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  updateCustomer(id: number, value: any): Observable<object> {

    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getCustomersList(): Observable<any> {

    return this.http.get(`${this.baseUrl}`);
  }

  getCustomerByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
