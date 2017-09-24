import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/* Implementation of animation */

import { NgModule } from '@angular/core';

/*Angular Components/Material */

import  { MdCheckboxModule, 
          MdSelectModule,
          MdInputModule, 
          MdDatepickerModule, 
          MdButtonToggleModule,
          MdCardModule } from '@angular/material';

/*Directives*/
import { NgInit  } from './directives/ngInit.directive';

/*Сервіс аутентифікації */
import { AuthService } from './auth.service';
import { AuthGuard }   from './services/authguard/authguard.service';
import { DreamService } from './services/dream/dream.service';
import { FriendsService } from './services/friends/friends.service';

/* Модулі налаштування Firebase */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

/*Модулі налаштування проекту*/
import { FriendsPipe } from './Pipes/FriendsPipe.pipe';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

/*Мої Компоненти */
import { AppComponent } from './app.component';
import { LoginComponent} from './login/login.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { MotivationComponent } from './motivation/motivation.component';
import { FriendsComponent } from './friends/friends.component';
import { CreateComponent } from './create/create.component';
import { GodlikeComponent } from './godlike/godlike.component';
import { groupsComponent } from './groups/groups.component';
import { PostComponent } from './post/post.component';
import { NewsComponent } from './news/news.component';

@NgModule({

  imports: [

    BrowserModule,
    BrowserAnimationsModule,

    MdCheckboxModule,
    MdSelectModule,
    MdInputModule,  
    MdDatepickerModule,  
    MdButtonToggleModule,
    MdCardModule,
    
    HttpModule, 
    FormsModule,

    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),

    RouterModule.forRoot
    ([
      {
        path:'login',
        component:LoginComponent
      },
      {
        path: 'motivation',
        component: MotivationComponent
      },
      {
        path: 'friends',
        component: FriendsComponent,
        canActivate: [AuthGuard]
      },      
      {
        path: 'friends/:uid',
        component: FriendsComponent,
        canActivate: [AuthGuard]
      },
      {
       path: 'links',
       component: groupsComponent,
       canActivate: [AuthGuard]
      },
      {
        path: 'create',
        component: CreateComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'inception',
        component: GodlikeComponent
      //  canActivate: [AuthGuard]
      },
      {
        path: 'news',
        component: NewsComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers:[AuthService, AuthGuard, DreamService, FriendsService, NewsComponent],
  declarations: [ AppComponent, LoginComponent,
    LeftmenuComponent,
    TopmenuComponent,
    MotivationComponent,
    FriendsComponent,
    CreateComponent,
    GodlikeComponent,
    groupsComponent,
    FriendsPipe,
    NgInit,
    PostComponent,
    NewsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}