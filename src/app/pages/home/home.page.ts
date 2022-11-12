import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  peixes: any[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.peixes = JSON.parse(localStorage.getItem('Peixes' || '[]'));
    this.getPeixes();
  }

  getPeixes(){
    if(this.peixes != null) {
      return;
    }
    this.apiService.getPeixes().subscribe((data: any) =>{
      localStorage.setItem('Peixes', JSON.stringify(data));
    });
    setTimeout(() => {
      this.peixes = JSON.parse(localStorage.getItem('Peixes') || '[]');
    }, 1);
  }

}
