import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StyleguidePageRoutingModule } from './styleguide-routing.module';

import { StyleguidePage } from './styleguide.page';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { TruncatedTextComponent } from 'src/app/components/truncated-text/truncated-text.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StyleguidePageRoutingModule,
    TruncateModule
    
  ],
  declarations: [StyleguidePage, TruncatedTextComponent ]
})
export class StyleguidePageModule {}
