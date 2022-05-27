import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SelfieListComponent } from './features/selfies/selfie-list/selfie-list.component';
import { UnSelfieReadonlyComponent } from './features/selfies/un-selfie-readonly/un-selfie-readonly.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { MenuGeneralComponent } from './shared/component/menu-general/menu-general.component';
import { LoggerService } from './shared/services/logger/logger.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent,
    FooterComponent,
    SelfieListComponent,
    UnSelfieReadonlyComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
