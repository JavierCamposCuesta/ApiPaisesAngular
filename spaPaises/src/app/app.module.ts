import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { SidebarComponent } from './shared-module/sidebar/sidebar.component';
import { PaisModule } from './pais_module/pais.module';
import { PorPaisComponent } from './pais_module/pages/por-pais/por-pais.component';
import { HttpClientModule } from '@angular/common/http';
import { VerPaisComponent } from './pais_module/pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PorPaisComponent,
    VerPaisComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    PaisModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
