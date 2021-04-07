import { Component, OnInit } from '@angular/core';
import  *  as  productData  from  'src/assets/products.json';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {
  shortDesc: boolean = false
  products:  any  = (productData as  any).default;
  
  constructor() { }

  ngOnInit(): void {
    
    console.log(this.products);
  }

}
interface Product{
  prodid: Number;
  shortdesc: String;
  longdesc: String;
  unitsize: String;
  unitprice: String;
}