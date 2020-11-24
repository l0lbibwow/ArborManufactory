import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private prodService: ProductService) { }
Products: any;
  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      // this.
    }
    this.prodService.getAllProduct().subscribe(
      data => {
        this.Products = data;
        // console.log(data);
      }
    );
  }
}
