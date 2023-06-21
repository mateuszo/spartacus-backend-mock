import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';

// // console.log all actions
// export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
//   return function (state, action) {
//     if (action.type === CartActions.CART_ADD_ENTRY) {
//       console.log('state', state);
//       console.log('action', action);
//       return;
//     }

//     return reducer(state, action);
//   };
// }

// export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
