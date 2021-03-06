import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/vendor';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendorservice } from '../service/vendorservice';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  vendorId: number;
  vendor: Vendor;

  constructor(private route: ActivatedRoute,private router: Router,
    private vendorService: Vendorservice) { }

  ngOnInit() {
    this.vendor = new Vendor();

    this.vendorId= this.route.snapshot.params['id'];
    
    this.vendorService.getVendor(this.vendorId)
      .subscribe(data => {
        console.log(data)
        this.vendor= data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['vendors']);
  }
}
