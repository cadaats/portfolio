import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'
import { ScannerRoutingModule } from './scanner-routing.module';
import { InitComponent } from './components/init/init.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentComponent } from './components/content/content.component';
import { MaterialModule } from '../shared/material.module';
import { MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InitComponent, SideNavComponent, ToolbarComponent, ContentComponent],
  imports: [
    CommonModule,
    ScannerRoutingModule,
    MaterialModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class ScannerModule { }
