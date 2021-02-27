import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [

    RouterModule.forRoot([

      {
        path: 'Product',
        loadChildren: () => import('./Product/product/product.module').then(m => m.ProductModule),
        data: { preload: true }
      },
   

      { path: '', redirectTo: 'Product', pathMatch: 'full' },
      { path: '**', redirectTo: 'Product', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
