"use strict";

var _ramda = require("ramda");

/* Constants */
var INTRO_LABEL = 'Skip Intro';
var RECAP_LABEL = 'Skip Recap';
/* Selectors */

var SKIP_INTRO_SELECTOR = "[aria-label=\"".concat(INTRO_LABEL, "\"]");
/* Utilities */

var log = (0, _ramda.when)(console.log, _ramda.identity);
var invokeUnary = (0, _ramda.invoker)(1);
/* Getters */

var addedNodesGetter = (0, _ramda.prop)('addedNodes');
/* Invokers */

var selectNode = invokeUnary('querySelector');
/* Node Selectors */

var selectSkipIntroAnchor = selectNode(SKIP_INTRO_SELECTOR);
/* Constructors */

var mutationObserverConstructor = (0, _ramda.construct)(window.MutationObserver);
/* Event Handlers */

var onNodeAdded = (0, _ramda.pipe)(selectSkipIntroAnchor, log);
var onMutationObserved = (0, _ramda.pipe)(addedNodesGetter, onNodeAdded);
var onMutationsObserved = (0, _ramda.forEach)(onMutationObserved);
var mutationObserver = mutationObserverConstructor(onMutationsObserved);
mutationObserver.observe(document.body, {
  childList: true,
  subtree: true
});