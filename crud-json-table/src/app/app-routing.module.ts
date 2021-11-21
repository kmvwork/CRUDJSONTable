import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutPageComponent} from "./components/main-layout-page/main-layout-page.component";
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import {LoadDataPageComponent} from "./components/load-data-page/load-data-page.component";
import {TableDataPageComponent} from "./components/table-data-page/table-data-page.component";
import {EditDataPageComponent} from "./components/edit-data-page/edit-data-page.component";
import {UnloadDataPageComponent} from "./components/unload-data-page/unload-data-page.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutPageComponent, children: [
      {path: '', redirectTo: '/welcome', pathMatch: 'full'},
      {path: 'welcome', component: WelcomePageComponent},
      {path:'load', component:LoadDataPageComponent},
      {path:'table', component: TableDataPageComponent},
      {path:'edit/:id', component: EditDataPageComponent},
      {path:'unload', component:UnloadDataPageComponent},
      {path:'**', component: ErrorPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
