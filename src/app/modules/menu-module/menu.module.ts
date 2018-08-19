import { NgModule } from '@angular/core';
import { GetmenuitemsService } from './services/getmenuitems.service';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    
    providers:[GetmenuitemsService],
    bootstrap: [MenuComponent]
})

export class MenuModule{};

