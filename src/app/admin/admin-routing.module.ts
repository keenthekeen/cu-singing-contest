import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '../admin.guard';
import { AdminComponent } from './admin/admin.component';
import { SlipCheckComponent } from './slip-check/slip-check.component';
import { SongCheckComponent } from './song-check/song-check.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AdminComponent
      },
      {
        path: '',
        component: AdminPagesComponent,
        children: [
          {
            path: 'slip_check',
            component: SlipCheckComponent
          },
          {
            path: 'song_check',
            component: SongCheckComponent
          }
        ]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
