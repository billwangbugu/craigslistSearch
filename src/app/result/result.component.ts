import {  Component, OnInit } from '@angular/core';
import { Product } from './result.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],

})
export class ResultComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price'];


  products: Product[]=[
    {name: 'Baby car seat with matching stroller', price: 120},
    {name: ' Little Tikes Foot to Floor Car', price: 25},
    {name: 'Subaru CAR MATS', price: 50},
    {name: 'Car Roof ', price: 65},
    {name: 'SUV Roof', price: 75},
    {name: '2019 Mazda black', price: 25988},
    {name: '2019 Mazda CX-5', price: 25988},
    {name: 'car bike carrier', price: 0},
    {name: 'car seat Safety 1st', price: 30},
  ]
  dataSource = new MatTableDataSource(this.products)

  ngOnInit() {}



}

