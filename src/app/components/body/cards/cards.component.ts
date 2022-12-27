import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  numero=0;
  incremeto(){
    this.numero=this.numero+1;
  }
  decremeto(){
    this.numero=this.numero-1;
    if(this.numero<0){
      Swal.fire(
        'El número esta en cero',
        'Por favor incremeta el número',
        'warning'
      )
      this.numero=0;
    }
  }
}
