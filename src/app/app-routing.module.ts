import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./modules/posts/posts.module').then((m) => m.PostsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then((m) => m.UsersModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./modules/albums/albums.module').then((m) => m.AlbumsModule)
  },
  {
    path: 'todos',
    loadChildren: () => import('./modules/todos/todos.module').then((m) => m.TodosModule)
  },
  { path: '', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
