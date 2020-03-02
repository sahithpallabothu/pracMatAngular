import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';

import { FlexLayoutModule } from '@angular/flex-layout';

//importing forms modules 
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

//importing http module for webapi connection
import { HttpClientModule } from'@angular/common/http';

//importing sidenav module in angular
import { MatInputModule,MatSelectModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

//components created
import { AdminComponent } from './admin/admin.component';
import { ContactsComponent } from './contacts/contacts.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AdminComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,MatIconModule,
    MatListModule,MatToolbarModule,
    MatButtonModule,MatButtonToggleModule,
    FormsModule, ReactiveFormsModule,MatInputModule,MatSelectModule,
    FlexLayoutModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
