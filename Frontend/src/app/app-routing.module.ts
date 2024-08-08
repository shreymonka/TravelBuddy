import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { SignupPageComponent } from './core/components/signup-page/signup-page.component';
import { PostLoginPageComponent } from './core/components/post-login-page/post-login-page.component';
import { ListPostComponent } from './core/components/list-post/list-post.component';

const routes: Routes = [
  { path: '', redirectTo:'loginpage', pathMatch:'full' },
  { path: 'loginpage', component: LoginPageComponent},
  { path: 'signup', component: SignupPageComponent},
  { path: 'postLogin', component: PostLoginPageComponent},
  { path: 'listing', component: ListPostComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
