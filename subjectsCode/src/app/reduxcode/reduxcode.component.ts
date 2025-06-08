import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './redux.actions';

@Component({
  selector: 'app-reduxcode',
  templateUrl: './reduxcode.component.html',
  styleUrl: './reduxcode.component.css'
})
export class ReduxcodeComponent {
  constructor(public store: Store<{count:any}>){}
count$ = this.store.select('count');

inc(){
  this.store.dispatch(increment())  
}
dec(){
  this.store.dispatch(decrement())
}
res(){
  this.store.dispatch(reset())
}
}
