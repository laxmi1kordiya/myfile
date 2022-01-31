import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './nav/home/home.component';
import { ServiceComponent } from './nav/service/service.component';
import { AboutUsComponent } from './nav/about-us/about-us.component'
import { RouterModule, Routes } from '@angular/router';
import { NgcontainerComponent } from './pipe/ngcontainer/ngcontainer.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgcontantComponent } from './ngcontant/ngcontant.component';
import { CardComponent } from './card/card.component';
import { TemplateComponent } from './template/template.component';
import { PipeComponent } from './pipe/pipe.component';
import { HighlightPipe } from './highlight.pipe';
import { FreeapiService } from './freeapi.service';
import { GetComponent } from './get/get.component';
// import { FormComponent } from './myarry/form/form.component';

// import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {path:'',component: HomeComponent},
  {path:'about-us',component: AboutUsComponent},
  {path:'service',component: ServiceComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ServiceComponent,
    AboutUsComponent,
    HomeComponent,
    NgcontainerComponent,
    StudentlistComponent,
    ReactiveformComponent,
    NgifComponent,
    NgcontantComponent,
    CardComponent,
    TemplateComponent,
    PipeComponent,
    HighlightPipe,
    GetComponent,
    

    // FormComponent,
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
],
  providers: [FreeapiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
