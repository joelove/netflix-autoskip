import { compose, forEach, head, pipe, when } from 'ramda';
import { addedNodesGetter } from './utilities/getters';
import { mutationObserverConstructor } from './utilities/constructors';
import { isNotNull, isElement } from './utilities/conditions';
import { invoke, invokeUnary, invokeBinary } from './utilities/operations';
import { SKIP_INTRO_SELECTOR } from './constants/element-selectors';

const observeNode = invokeBinary('observe');
const observeDocument = observeNode(document.body, { childList: true, subtree: true });
const documentMutationObserver = compose(observeDocument, mutationObserverConstructor, forEach);

const selectNode = invokeUnary('querySelector');
const selectSkipIntroAnchor = selectNode(SKIP_INTRO_SELECTOR);
const invokeClick = invoke('click');

const clickNode = when(isNotNull, invokeClick);
const clickSkipIntroAnchor = pipe(selectSkipIntroAnchor, clickNode);

const onNodeAdded = when(isElement, clickSkipIntroAnchor);
const onMutationObserved = pipe(addedNodesGetter, head, onNodeAdded);

documentMutationObserver(onMutationObserved);
