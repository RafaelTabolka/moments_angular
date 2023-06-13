import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/service/moment.service';
import { Moment } from 'src/app/interface/Moment'; //Interface
import { environment } from 'src/environments/environment'; //Rota genérica do backend
import { faSearch } from '@fortawesome/free-solid-svg-icons'; //Ícone de busca

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  teste: string[] = [];
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch
  searchTerm:string = ''

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((itens) => {
      const data = itens.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });

      this.allMoments = data;
      this.moments = data;
    });
  }

  search(e: Event): void{
    const target = e.target as HTMLInputElement
    const value = target.value

    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLowerCase().includes(value)
    })
  }
}
