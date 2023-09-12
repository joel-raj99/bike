import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  GetFormData(data:any):void
  {
    console.log(data);
    console.log(data.name);
  }
onclick()
{
  alert('successfully verified');
}

};
