import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './Pages/app-home/app-home.component';
import { AppMenuComponent } from './Pages/app-menu/app-menu.component';
import { AppBannerComponent } from './Pages/app-banner/app-banner.component';
import { AppSobreComponent } from './Pages/app-sobre/app-sobre.component';
import { AppVantagensComponent } from './Pages/app-vantagens/app-vantagens.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { BannerDoisComponent } from './Pages/banner-dois/banner-dois.component';
import { ContatoComponent } from './Pages/contato/contato.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppMenuComponent,
    AppBannerComponent,
    AppSobreComponent,
    AppVantagensComponent,
    ProdutosComponent,
    BannerDoisComponent,
    ContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
