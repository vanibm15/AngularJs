import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

    export class AppComponent {
    title = 'newangular';
    name="vani"
    inputData:string="" ;
    nameError:string="";
    imgPhoto="../assets/bbb.png";
    

    inputName(){ 
    console.log(this.inputData);
// const nameRegex= RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
// if (nameRegex.test(this.inputData)){
//   this.nameError="";
//   return;
// }
// this.nameError="name is incorrect";
//     }
    }

}



