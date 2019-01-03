import {
  forEach,
  pipe,
  prop,
  construct,
  invoker,
  when,
  identity,
} from 'ramda';

/* Constants */
const INTRO_LABEL = 'Skip Intro';
const RECAP_LABEL = 'Skip Recap';

/* Selectors */
const SKIP_INTRO_SELECTOR = `[aria-label="${INTRO_LABEL}"]`;

/* Utilities */
const log = when(console.log, identity);
const invokeUnary = invoker(1);

/* Getters */
const addedNodesGetter = prop('addedNodes');

/* Invokers */
const selectNode = invokeUnary('querySelector');

/* Node Selectors */
const selectSkipIntroAnchor = selectNode(SKIP_INTRO_SELECTOR);

/* Constructors */
const mutationObserverConstructor = construct(window.MutationObserver);

/* Event Handlers */
const onNodeAdded = pipe(selectSkipIntroAnchor, log);
const onMutationObserved = pipe(addedNodesGetter, onNodeAdded);
const onMutationsObserved = forEach(onMutationObserved);


const mutationObserver = mutationObserverConstructor(onMutationsObserved);
mutationObserver.observe(document.body, { childList: true, subtree: true });
