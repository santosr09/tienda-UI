import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { RouterOutlet } from '@angular/router';
import {DataTableComponent} from "./data-table/data-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tienda-UI';
  categorias: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }
}

