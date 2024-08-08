import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { SignupPageComponent } from './core/components/signup-page/signup-page.component';
import { NavbarComponent } from './shared/UI/navbar/navbar.component';
import { FooterComponent } from './shared/UI/footer/footer.component';
import { PostLoginPageComponent } from './core/components/post-login-page/post-login-page.component';
import { ListPostComponent } from './core/components/list-post/list-post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostLoginPageService } from './core/services/post-login-page/post-login-page.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    NavbarComponent,
    FooterComponent,
    PostLoginPageComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PostLoginPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
