import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubnavbarComponent } from './components/subnavbar/subnavbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrepageComponent } from './components/prepage/prepage.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardtitleComponent } from './components/cardtitle/cardtitle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubnavbarComponent,
    BannerComponent,
    HomeComponent,
    CardsComponent,
    FooterComponent,
    PrepageComponent,
    MenuComponent,
    CardtitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
