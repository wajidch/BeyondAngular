import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { apiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';   
import { NgxSpinnerService } from 'ngx-spinner';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showHomeAndConactMenu: boolean;
teamlist:any;
imgUrl=environment.imageUrl;
  constructor(public router: Router,private apiservice:apiService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
    this.getTeam();
  
  }

  getTeam(){
    this.spinner.show();

    
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 3000);    

    this.apiservice.get("job/teamList").subscribe((res:any)=>{

      this.teamlist=res.body.response;

  setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);      
    })
  }

  home(){
    $("#home").addClass('active');
    $("#about").removeClass('active');
    $("#team").removeClass('active');
    $("#job").removeClass('active');
    $("#contact").removeClass('active');
  }
  about(){
    $("#home").removeClass('active');
    $("#about").addClass('active');
    $("#team").removeClass('active');
    $("#contact").removeClass('active');
    $("#job").removeClass('active');
  }
  team(){
    $("#home").removeClass('active');
    $("#about").removeClass('active');
    $("#team").addClass('active');
    $("#contact").removeClass('active');
    $("#job").removeClass('active');
  }
 
  contact(el: HTMLElement){
    $("#home").removeClass('active');
    $("#about").removeClass('active');
    $("#team").removeClass('active');
    $("#job").removeClass('active');
    $("#contact").addClass('active');
     el.scrollIntoView();

  }
  job(){
    $("#home").removeClass('active');
    $("#about").removeClass('active');
    $("#team").removeClass('active');
    $("#contact").removeClass('active');

    $("#job").addClass('active');
  }
}
