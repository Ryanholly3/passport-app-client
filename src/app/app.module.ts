import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const appRoutes: Routes = [
  { path: '', component: LoginSignupComponent },
  { path: 'dashboard', component: DashboardComponent }
  { path: 'signup-form', component: SignupFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    DashboardComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
