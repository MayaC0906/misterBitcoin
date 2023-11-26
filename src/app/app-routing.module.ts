import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { contactResolver } from './resolvers/contact.resolver';
import { ChartsComponent } from './pages/charts/charts.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: contactResolver }
  },
  {
    path: 'contact',
    component: ContactIndexComponent
  },
  {
    path: 'edit/:id',
    component: ContactEditComponent,
    resolve: { contact: contactResolver }
  },
  {
    path: 'edit',
    component: ContactEditComponent
  },
  {
    path: 'chart',
    component: ChartsComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    canActivate: [authGuard],
    path: '',
    component: HomePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
