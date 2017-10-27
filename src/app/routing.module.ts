import { RouterModule, Routes } from '@angular/router';
import { DownComponent }        from './down/down.component';
import { UpComponent }          from './up/up.component';
import { UpAndDownComponent }   from './up-and-down/up-and-down.component';

const routes: Routes = [
  { path: '',     component: DownComponent },
  { path: 'down', component: DownComponent },
  { path: 'up',   component: UpComponent },
  { path: 'both', component: UpAndDownComponent },
  { path: '**',   redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);