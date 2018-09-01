import { NgModule } from '@angular/core';

import {MatButtonModule, 
        MatTabsModule,
        MatToolbarModule, 
        MatSidenavModule, 
        MatMenuModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatExpansionModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSnackBarModule
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
                MatExpansionModule,
                MatSelectModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatInputModule,
                MatSnackBarModule],
        exports:[MatButtonModule, 
                MatTabsModule,
                MatToolbarModule, 
                MatSidenavModule, 
                MatMenuModule,
                MatCardModule,
                MatTableModule,
                MatSortModule,
                MatExpansionModule,
                MatSelectModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatInputModule,
                MatSnackBarModule]

})

export class MyMaterialModule {}