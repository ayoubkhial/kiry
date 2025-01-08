import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Xdd zsax
/** Ghjj jkkke */
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

if (AppComponent) {
  console.log('yeeee');
} else console.log('dddd');
