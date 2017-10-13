import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModeGuard } from '../mode.guard';
import { UserGuard } from '../user.guard';
import { AcceptGuard } from './accept.guard';
import { AcceptComponent } from './accept/accept.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DayGuard } from './day.guard';
import { PayGuard } from './pay.guard';
import { PayComponent } from './pay/pay.component';
import { ProfileGuard } from './profile.guard';
import { ProfileComponent } from './profile/profile.component';
import { SelectDayComponent } from './select-day/select-day.component';
import { SelectSongComponent } from './select-song/select-song.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ModeGuard, UserGuard],
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '1_accept'
      },
      {
        path: '1_accept',
        component: AcceptComponent
      },
      {
        path: '2_profile',
        component: ProfileComponent,
        canActivate: [AcceptGuard]
      },
      {
        path: '3_selectDay',
        component: SelectDayComponent,
        canActivate: [ProfileGuard]
      },
      {
        path: '4_pay',
        component: PayComponent,
        canActivate: [DayGuard]
      },
      {
        path: '5_selectSong',
        component: SelectSongComponent,
        canActivate: [PayGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
