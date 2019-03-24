import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './home/trang-chu/trang-chu.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => HomeModule
  },
  // {
  //   path: 'chi-tiet-phim/:maphim', component: ChitietphimComponent
  // },
  // {
  //   path: 'phong-ve/:malichchieu', component: DanhSachVeComponent,canActivate: [LoginGuard]
  // },
  // {
  //   path: 'dang-nhap', component: LoginComponent
  // }
];

@NgModule({
  imports: [
    // BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingApp = [TrangChuComponent];