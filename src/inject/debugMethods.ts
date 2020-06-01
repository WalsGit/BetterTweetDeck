import {config} from 'node-config-ts';

import {findMustache, getChirpFromElement, getChirpFromKey} from '../helpers/tweetdeckHelpers';

declare global {
  interface Window {
    BTD: any;
  }
}

/** Setup a few helpful debug functions on the global scope if the config asks for it. */
export function maybeSetupDebugFunctions() {
  if (!config.Client.debug) {
    return;
  }

  window.BTD = {};
  window.BTD.debug = {
    getChirpFromElement,
    getChirpFromKey,
    findMustache,
  };
}