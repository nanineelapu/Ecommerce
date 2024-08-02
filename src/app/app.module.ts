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
import { WomencardsComponent } from './components/womencards/womencards.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebannerComponent } from './components/sidebanner/sidebanner.component';
import { SponsersComponent } from './components/sponsers/sponsers.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { Sponsord2Component } from './components/sponsord2/sponsord2.component';
import { Sponsord1Component } from './components/sponsord1/sponsord1.component';

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
    CardtitleComponent,
    WomencardsComponent,
    SidebarComponent,
    SidebannerComponent,
    SponsersComponent,
    SponsorsComponent,
    Sponsord2Component,
    Sponsord1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
