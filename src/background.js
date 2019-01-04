import {
  compose,
  forEach,
  head,
  pipe,
  when,
} from 'ramda';

import { SKIP_INTRO_SELECTOR } from './constants/element-selectors';

import { addedNodesGetter } from './utilities/getters';
import { mutationObserverConstructor } from './utilities/constructors';
import { isNotNull, isElement } from './utilities/conditions';
import { invoke, invokeUnary, invokeBinary } from './utilities/operations';

const invokeClick = invoke('click');
const selectNode = invokeUnary('querySelector');
const observeNode = invokeBinary('observe');

const observeDocument = observeNode(document.body, { childList: true, subtree: true });
const documentMutationObserver = compose(observeDocument, mutationObserverConstructor, forEach);

const selectSkipIntroAnchor = selectNode(SKIP_INTRO_SELECTOR);
const clickNode = when(isNotNull, invokeClick);
const clickSkipIntroAnchor = pipe(selectSkipIntroAnchor, clickNode);
const onNodeAdded = when(isElement, clickSkipIntroAnchor);
const onMutationObserved = pipe(addedNodesGetter, head, onNodeAdded);

documentMutationObserver(onMutationObserved);
