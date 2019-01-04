import {
  forEach,
  pipe,
  prop,
  construct,
  invoker,
  when,
  head,
  complement,
} from 'ramda';

import {
  isNull,
  isUndefined,
} from 'lodash/fp';

/* Constants */
const INTRO_LABEL = 'Skip Intro';
// const RECAP_LABEL = 'Skip Recap';

/* Selectors */
const SKIP_INTRO_SELECTOR = `[aria-label="${INTRO_LABEL}"]`;

/* Utilities */
const invoke = invoker(0);
const invokeUnary = invoker(1);
const isNotNull = complement(isNull);
const isNotUndefined = complement(isUndefined);

/* Getters */
const addedNodesGetter = prop('addedNodes');

/* Invokers */
const invokeClick = invoke('click');
const selectNode = invokeUnary('querySelector');

/* Node Selectors */

/* Constructors */
const mutationObserverConstructor = construct(window.MutationObserver);

/* Event Handlers */
const clickNode = when(isNotNull, invokeClick);
const selectSkipIntroAnchor = selectNode(SKIP_INTRO_SELECTOR);
const clickSkipIntroAnchor = pipe(selectSkipIntroAnchor, clickNode);
const onNodeAdded = when(isNotUndefined, clickSkipIntroAnchor);
const onMutationObserved = pipe(addedNodesGetter, head, onNodeAdded);
const onMutationsObserved = forEach(onMutationObserved);

const mutationObserver = mutationObserverConstructor(onMutationsObserved);
mutationObserver.observe(document.body, { childList: true, subtree: true });
