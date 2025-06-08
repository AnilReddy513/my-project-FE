import {createReducer, on} from '@ngrx/store';
import {increment, decrement, reset} from './redux.actions'

export const initialval=0;
export const counterducer = createReducer(initialval, 
    on(increment, (val)=> val +1),
    on(decrement, (val)=> val -1),
    on(reset , ()=>0)
);