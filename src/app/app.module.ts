import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ComposeCmpComponent } from './compose-cmp/compose-cmp.component';
import { PopupMessageCmpComponent } from './popup-message-cmp/popup-message-cmp.component';
import { ConversationsCmpComponent } from './conversations-cmp/conversations-cmp.component';
import { ConversationCmpComponent } from './conversation-cmp/conversation-cmp.component';
import { MessagesCmpComponent } from './messages-cmp/messages-cmp.component';
import { MessageCmpComponent } from './message-cmp/message-cmp.component';

// const routes: Routes = [
//   { path: 'compose', component: ComposeCmpComponent},
//   { path: 'popup', component: PopupMessageCmpComponent},
//   { path: 'conversations', component: ConversationsCmpComponent},
//   { path: 'conversation', component: ConversationCmpComponent},
//   { path: 'messages', component: MessagesCmpComponent},
//   { path: 'message', component: MessageCmpComponent}
// ];

const routes: Routes = [
  {
    path: ':folder',
    children: [
      {
        path: '',
        component: ConversationsCmpComponent
      },
      {
        path: ':id',
        component: ConversationCmpComponent,
        children: [
          {
            path: 'messages',
            component: MessagesCmpComponent
          },
          {
            path: 'messages/:id',
            component: MessageCmpComponent
          }
        ]
      }
    ]
  },
  {
    path: 'compose',
    component: ComposeCmpComponent,
    outlet: 'popup'
  },
  {
    path: 'message/:id',
    component: PopupMessageCmpComponent,
    outlet: 'popup'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ComposeCmpComponent,
    PopupMessageCmpComponent,
    ConversationsCmpComponent,
    ConversationCmpComponent,
    MessagesCmpComponent,
    MessageCmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
