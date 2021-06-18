import { Component, OnInit } from '@angular/core';
import { NumbersApiService } from '@app/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  numbersDescription: Array<object> = []
  constructor(private numbersApiService: NumbersApiService) { }

  ngOnInit(){
  
    this.numbersDescription = [
      {date: '23/05', info: 'lorem lipsum '},
      {date: '23/05', info: 'lorem lipsum '},
      {date: '23/05', info: 'lorem lipsum '},
      {date: '23/05', info: 'lorem lipsum '},
    ]

 
     
  }

  getSelectedDateInfo(date: string){
    let numberInfo = this.numbersApiService.getNumberInfo(date).subscribe(result => {
      // ERROR CIRULAR JSON CAN'T SOLVE ...
      // Create object for the card
      // let numberDescription = {date: date, info: result}
      // Push to array of numbersInfo
      // this.numbersDescription.push(numberDescription)
      // localStorage.setItem('numbersDescription', this.numbersDescription);
    })
  }

}
