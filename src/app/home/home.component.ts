import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  listaAll:any [];

  constructor(private http: HttpClient,private route:Router) { }

  ngOnInit() {
    this.getLista().subscribe((e)=>{
      this.listaAll = e.response;
      console.log(this.listaAll);
    })

  }

  redir(i:any){

    this.route.navigate(["/dettaglio/"+i]);

  }

  public getLista(): Observable<any> {
    return this.http.get("https://front-endpanarotto.azurewebsites.net/api/viaggi/getAllViaggi");
  }

}
