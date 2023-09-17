import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsModule } from './tools/tools.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => ToolsModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
