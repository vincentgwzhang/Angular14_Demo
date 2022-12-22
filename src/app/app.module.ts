import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecyclestudyComponent } from './componentstudy/lifecyclestudy/lifecyclestudy.component';
import { Directive1DemoComponent } from './componentstudy/directive1-demo/directive1-demo.component';
import { Directive1Directive } from './componentstudy/directive1.directive';
import {FormsModule} from "@angular/forms";
import { InputDemo1Component } from './componentstudy/input-demo1/input-demo1.component';
import { SubcomponentComponent } from './componentstudy/InputDemo1/subcomponent/subcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecyclestudyComponent,
    Directive1DemoComponent,
    Directive1Directive,
    InputDemo1Component,
    SubcomponentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
