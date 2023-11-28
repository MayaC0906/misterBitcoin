import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactListComponent } from './cmps/contact/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact/contact-preview/contact-preview.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ContactFilterComponent } from './cmps/contact/contact-filter/contact-filter.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { NgChartsModule } from 'ng2-charts';
import { SignupComponent } from './pages/signup/signup.component';
import { LineChartComponent } from './cmps/line-chart/line-chart.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactIndexComponent,
    ContactDetailsComponent,
    ContactListComponent,
    ContactPreviewComponent,
    AppHeaderComponent,
    ChartsComponent,
    ContactFilterComponent,
    ContactEditComponent,
    SignupComponent,
    LineChartComponent,
    MovesListComponent,
    MovePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
