import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsComponent } from './subjects/subjects.component';
import { ReceiverComponentComponent } from './receiver-component/receiver-component.component';
import { PaginationDetailsComponent } from './pagination-details/pagination-details.component';
import { ManageLimitsComponent } from './manage-limits/manage-limits.component';
import { InterceptorcodeComponent } from './interceptorcode/interceptorcode.component';
import { ReduxcodeComponent } from './reduxcode/reduxcode.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ValidpinComponent } from './validpin/validpin.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MergeandswitchmapsComponent } from './mergeandswitchmaps/mergeandswitchmaps.component';
import { MergeMapCodeForMoviesComponent } from './merge-map-code-for-movies/merge-map-code-for-movies.component';
import { SwitchmapcodeComponent } from './switchmapcode/switchmapcode.component';
import { NewpaginationCodeComponent } from './newpagination-code/newpagination-code.component';
import { ApiPagenationdataComponent } from './api-pagenationdata/api-pagenationdata.component';

const routes: Routes = [
  {
    path:"main", component:SubjectsComponent
  },
  {
    path:"received", component:ReceiverComponentComponent
  },
  {
    path:"page", component:PaginationDetailsComponent
  },

  {
    path:"manage", component:ManageLimitsComponent
  },
  {
    path:"interceptor", component:InterceptorcodeComponent
  },
  {
    path:"items", component:ItemsListComponent
  },{
    path:"pagesssss", component:PaginationComponent
  },{
    path:"mergmapmovies",component:MergeMapCodeForMoviesComponent
  }
  ,{
    path:"mergmapcode",component:MergeandswitchmapsComponent
  },{
    path:'SwitchmapcodeComponent',component:SwitchmapcodeComponent
  } , 
  {
    path:"newpagination", component:NewpaginationCodeComponent
  },
  {
path:"apipage",component:ApiPagenationdataComponent
  },
  {
    path:"**", component:MergeandswitchmapsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
