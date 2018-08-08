import { NgModule } from '@angular/core';

import {MatButtonModule, 
        MatTabsModule,
        MatToolbarModule, 
        MatSidenavModule, 
        MatMenuModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatExpansionModule
        } from '@angular/material';


@NgModule({
        imports: [MatButtonModule, 
                MatTabsModule,
                MatToolbarModule, 
                MatSidenavModule, 
                MatMenuModule,
                MatCardModule,
                MatTableModule,
                MatSortModule,
                MatExpansionModule],
        exports:[MatButtonModule, 
                MatTabsModule,
                MatToolbarModule, 
                MatSidenavModule, 
                MatMenuModule,
                MatCardModule,
                MatTableModule,
                MatSortModule,
                MatExpansionModule]

})

export class MyMaterialModule {}