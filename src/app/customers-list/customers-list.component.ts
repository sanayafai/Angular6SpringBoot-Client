import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { error } from 'util';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
customers: Observable<Customer[]>;
  constructor(private customerServie: CustomerService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteCustomers() {
    this.customerServie.deleteAll().
    subscribe( data => {
      console.log(data);
      this.reloadData();
    }, 
    error => console.log('ERROR: ' + error));

  }
  reloadData(): any {
  this.customers = this.customerServie.getCustomersList();
  }

}
