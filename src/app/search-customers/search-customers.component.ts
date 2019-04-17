import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.scss']
})
export class SearchCustomersComponent implements OnInit {
  age: number;
  customers: Customer[];
  constructor(private customerService: CustomerService) {

  }

  ngOnInit() {
    this.age = 0;
  }

  onSubmit() {
    this.searchCustomers();
  }
  private searchCustomers() {
    this.customerService.getCustomerByAge(this.age).subscribe(customers => this.customers = customers);
  }
}
