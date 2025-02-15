import { Component } from '@angular/core';
import TravelsModel from 'src/app/models/travels-model';
import { TravelsServiceService } from 'src/app/service/travels-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  Travel:TravelsModel=new TravelsModel();

  constructor(private service:TravelsServiceService){}

  book(){
    const data=this.service.bookData(this.Travel);
    data.subscribe(
      (res:any)=>{
        console.log(res);
      alert("Inserted Successfully!!");
      },function(error){
        console.log(error);
        alert("something went wrong!!");
      }
    )
  
  }


}
