import { ItemProducto } from './../../libs/item.producto';
import { DataServiceService } from './../../servicios/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
participantes: Observable<any>;
  constructor( private service: DataServiceService,
    private storage: StorageService ) { }

  ngOnInit() {
    this.participantes = this.service.getParticipantes();
    // this.storage.addCart();
  }

}
