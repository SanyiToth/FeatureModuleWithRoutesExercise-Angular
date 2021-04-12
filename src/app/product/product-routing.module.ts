import {NgModule} from '@angular/core';
import {ProductlistComponent} from './productlist/productlist.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'products', component: ProductlistComponent},
  {path: 'products/details', component: ProductdetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
