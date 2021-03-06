import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import {GameComponent} from './game.component';
import {ShareModule} from '../../share/share.module';
import { PathNetComponent } from './component/path-net/path-net.component';
import { NavMeshComponent } from './component/nav-mesh/nav-mesh.component';
import { AStarComponent } from './component/a-star/a-star.component';

@NgModule({
  declarations: [
    GameComponent,
    PathNetComponent,
    NavMeshComponent,
    AStarComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    GameRoutingModule
  ]
})
export class GameModule { }
