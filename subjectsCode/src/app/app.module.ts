import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { DataserviceService } from './dataservice.service';
import { ReceiverComponentComponent } from './receiver-component/receiver-component.component';
import { PaginationDetailsComponent } from './pagination-details/pagination-details.component';
import { ManageLimitsComponent } from './manage-limits/manage-limits.component';
import { InterceptorcodeComponent } from './interceptorcode/interceptorcode.component';
import { httpErrorInterceptor } from './http-error.interceptor';
import { AllownumbersPipe } from './allownumbers.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllownumbdersDirectiveDirective } from './allownumbders-directive.directive';
import { ReduxcodeComponent } from './reduxcode/reduxcode.component';
import { StoreModule } from '@ngrx/store';
import { counterducer } from './reduxcode/redux.reducer';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import { ErrormsgComponent } from './errormsg/errormsg.component';
import { ValidpinComponent } from './validpin/validpin.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MergeandswitchmapsComponent } from './mergeandswitchmaps/mergeandswitchmaps.component';
import { MergeMapCodeForMoviesComponent } from './merge-map-code-for-movies/merge-map-code-for-movies.component';
import { SwitchmapcodeComponent } from './switchmapcode/switchmapcode.component';
import { NewpaginationCodeComponent } from './newpagination-code/newpagination-code.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceiverComponentComponent,
    PaginationDetailsComponent,
    ManageLimitsComponent,
    InterceptorcodeComponent,
    AllownumbersPipe,
    AllownumbdersDirectiveDirective,
    ReduxcodeComponent,
    ItemsListComponent,
    ErrormsgComponent,
    ValidpinComponent,
    PaginationComponent,
    MergeandswitchmapsComponent,
    MergeMapCodeForMoviesComponent,
    SwitchmapcodeComponent,
    NewpaginationCodeComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingModule,HttpClientModule, FormsModule, ReactiveFormsModule, StoreModule.forRoot({}, {}),
    StoreModule.forRoot({count:counterducer})
  ],
  providers: [
    DataserviceService,
    provideHttpClient(withInterceptors([httpErrorInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
