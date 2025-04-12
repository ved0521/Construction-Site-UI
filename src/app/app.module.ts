import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

/* Components*/
import { ShellComponent } from './components/shell/shell.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConnectComponent } from './components/connect/connect.component';
import { CareerComponent } from './components/career/career.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    ShellComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CareerComponent,
    ConnectComponent,
    AboutComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatDividerModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [ShellComponent]
})

export class AppModule { }
