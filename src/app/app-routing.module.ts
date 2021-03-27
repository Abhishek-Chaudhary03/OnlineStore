import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SttingsComponent } from './sttings/sttings.component';

const routes : Routes =[
  {path: '', redirectTo: '/aboutus', pathMatch:'full'},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'sttings', component: SttingsComponent},
  
  {path: '**', redirectTo: '/aboutus', pathMatch:'full'},
]

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
