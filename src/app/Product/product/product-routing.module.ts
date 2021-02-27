import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";


@NgModule({
    imports: [

        RouterModule.forChild([
            { path: '', component: ProductListComponent }
        ]),
       
      
    ],

    
    providers: [],
     
    
    exports: [RouterModule]
})
export class ProductRoutingModule { }