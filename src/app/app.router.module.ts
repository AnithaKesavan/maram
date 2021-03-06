import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./components/index/index.module').then((m) => m.IndexModule) },
    { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then((m) => m.ContactModule) },
    { path: 'about', loadChildren: () => import('./components/about/about.module').then((m) => m.AboutModule) }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true  }),
    ],
    exports: [RouterModule],
})
export class AppRouterModule {
}
