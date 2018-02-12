import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { HttpModule, JsonpModule  } from '@angular/http';
import { RouterModule } from '@angular/router';





import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';
import { ProductComponent } from './product/product.component';
import { MenbersComponent } from './menbers/menbers.component';
import { ConverterComponent } from './converter/converter.component';
import { VinchatbotComponent } from './vinchatbot/vinchatbot.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenbersComponent,
    ConverterComponent,
    VinchatbotComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule ,    
    RouterModule.forRoot([
      {
      path: 'member',
      component : MenbersComponent
      },
      {
        path: 'product',
        component : ProductComponent
        },
        {
          path: 'converter',
          component : ConverterComponent
          }
          ,
        {
          path: 'chatbot',
          component : VinchatbotComponent
          }
  ])
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
