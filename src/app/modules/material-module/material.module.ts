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
        MatSnackBarModule,
        MatTooltipModule,
        MatBottomSheetModule
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
                MatSnackBarModule,
                MatTooltipModule,
                MatBottomSheetModule],
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
                MatSnackBarModule,
                MatTooltipModule,
                MatBottomSheetModule]

})

export class MyMaterialModule {}