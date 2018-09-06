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
        MatBottomSheetModule,
        MatProgressSpinnerModule
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
                MatBottomSheetModule,
                MatProgressSpinnerModule],
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
                MatBottomSheetModule,
                MatProgressSpinnerModule]

})

export class MyMaterialModule {}