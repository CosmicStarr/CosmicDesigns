import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormGroup } from '@angular/forms';
import { IBrand } from 'src/app/models/brand';
import { ICategory } from 'src/app/models/category';
import { IPagination } from 'src/app/models/pagination';
import { StarrParams } from 'src/app/models/params';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  @ViewChild('Search',{static:true}) SearchBar:ElementRef
  products:IProducts[]=[];
  brand:IBrand[]
  category:ICategory[]=[]
  sunParams = new StarrParams
  p:IPagination;
  term:any 
  sortOptions = [
    {name:'Alphabetical',value:'name'},
    {name:'Price: Low to High',value:'priceAsc'},
    {name:'Price: High to Low',value:'priceDsc'}
  ]
  searchForm:FormGroup
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getCategory()
    this.getbrands()
  }
  onSearch(){
    this.sunParams.search = this.SearchBar.nativeElement.value
    this.getAllProducts()
    this.SearchBar.nativeElement.value = ''
    this.term = ''
  }

  onReset(){
    this.SearchBar.nativeElement.value = ''
    this.term = ''
    this.sunParams = new StarrParams()
    this.getAllProducts()
  }
  onSortSelected(sort:string){
    this.sunParams.sort = sort 
    this.getAllProducts()
    this.sunParams.sort = this.SearchBar.nativeElement.value
  }
  onCatSelected(CatId:number){
    this.sunParams.catId = CatId
    this.getAllProducts()
  }
  onBrandSelected(BrandId:number){
    this.sunParams.brandId = BrandId
    this.getAllProducts()
  }
  pageChanged(event: any){
    this.sunParams.pageNumber = event.page;
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getProducts(this.sunParams).subscribe((results)=>{
      this.products = results.result
      this.p = results.Pagination
    },error =>{
      console.log(error)
    })
  }

  getbrands(){
    this.productService.getBrands().subscribe((results)=>{
      // the ... break the array of results into individual elements. 
      // I simply added brandId 0 as the first element in the array of brands!
      this.brand = [{brandId:0,name:'All'},...results]
    },error =>{
      console.log(error)
    })
  }
  getCategory(){
    this.productService.getCategory().subscribe((results)=>{
      this.category = [{catId:0,name:'All'},...results]
    },error =>{
      console.log(error)
    })
  }
}
