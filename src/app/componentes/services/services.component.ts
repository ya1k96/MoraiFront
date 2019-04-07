import { DataServiceService } from './../../servicios/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
participantes: Observable<any>;
  constructor( private service: DataServiceService ) { }

  ngOnInit() {
    this.participantes = this.service.getParticipantes();
  }

}
