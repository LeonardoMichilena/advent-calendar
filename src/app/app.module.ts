import { BrowserModule, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { WelcomeParentComponent } from './welcome-parent/welcome-parent.component';
import { TextComponent } from './text/text.component';
import { SwipeUpComponent } from './swipe-up/swipe-up.component';
import { MediaContentComponent } from './media-content/media-content.component';
import { ButtonComponent } from './button/button.component';
import { TypeBoxComponent } from './type-box/type-box.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayCardComponent } from './day-card/day-card.component';
import { BigCardComponent } from './big-card/big-card.component';
import { SecondSlideParentComponent } from './second-slide-parent/second-slide-parent.component';

// export class MyHammerConfig extends HammerGestureConfig {
//   overrides = <any> {
//     swipe: { direction: Hammer.DIRECTION_ALL},
//   };
// }

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WelcomeParentComponent,
    TextComponent,
    SwipeUpComponent,
    MediaContentComponent,
    ButtonComponent,
    TypeBoxComponent,
    CalendarComponent,
    DayCardComponent,
    BigCardComponent,
    SecondSlideParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
  ],
  bootstrap: [AppComponent],
  providers: [HammerGestureConfig]
})
export class AppModule {}
