import { Component } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent {
  menuH : boolean = false;

  abrirMenu() {
      if (!this.menuH){
          this.menuH = true
      }else{
        this.menuH = false
      }
       
  }
}
