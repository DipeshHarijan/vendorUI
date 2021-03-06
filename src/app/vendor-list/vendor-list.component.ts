import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Vendor } from '../model/vendor';
import { Vendorservice } from '../service/vendorservice';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Observable<Vendor[]>;
  
  constructor(private vendorservice: Vendorservice,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.vendors = this.vendorservice.getVendorsList();
  }

  deleteVendor(VendorId: number) {
    this.vendorservice.deleteVendor(VendorId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  vendorDetails(vendorId: number){
    this.router.navigate(['details',vendorId ]);
  }

  updateVendor(vendorId: number){
    this.router.navigate(['update', vendorId]);
  }
}
