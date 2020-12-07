// Global Packages
import 'lazysizes';

// Veams & Veams Plugins
import Core from '@veams/core/lib/core';
import VeamsLogger from '@veams/plugin-logger';
import VeamsVent from '@veams/vent/lib/plugin/vent';
import { EventHandler } from '@veams/vent';
import VeamsMediaQueryHandler from '@veams/plugin-media-query-handler';
import VeamsModules from '@veams/plugin-modules';

// Veams Helpers
import throttle from '@veams/helpers/lib/operator/throttle';

// Project Specific Events
import EVENTS from './app.events';

interface AppCore extends Core {
  Vent: EventHandler;
  Events: Record<string, string>;
}

const Veams = new Core({ addToGlobal: false, namespace: 'Veams' }) as AppCore;

// Veams
Veams.onInitialize(() => {
  // Vent Plugin
  Veams.use(VeamsVent, {
    furtherEvents: EVENTS,
  });

  // Logger Plugin for devmode and logger
  Veams.use(VeamsLogger);

  // Media Query Handler Plugin
  Veams.use(VeamsMediaQueryHandler);

  // Module System Plugin
  Veams.use(VeamsModules, {
    internalCacheOnly: false,
  });

  // Trigger global scroll event
  window.onscroll = throttle((e) => {
    Veams.Vent.publish(Veams.EVENTS.scroll, e);
  }, 200);
});

export { Veams };
