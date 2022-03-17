import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgChartsModule} from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BarChartItemComponent } from './bar-chart-item/bar-chart-item.component';
import { EmplyoeeFormComponent } from './emplyoee-form/emplyoee-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import { FormService } from './form.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';  


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    BarChartItemComponent,
    EmplyoeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    MatRadioModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCardModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    FormsModule
    

  ],
  providers: [HttpClientModule,FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
