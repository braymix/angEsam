import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {

  id:any;
  listAll:any[];
  constructor(private http: HttpClient,private route:Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.getLista(this.id).subscribe((e)=>{
      console.log(e);
      this.listAll = e.response;
      console.log(this.listAll);
    })
  }

  public getLista(id:any): Observable<any> {
    return this.http.get("https://front-endpanarotto.azurewebsites.net/api/viaggi/detDettaglio/" + id);
  }

  home(){
    this.route.navigate([""]);
  }
}
