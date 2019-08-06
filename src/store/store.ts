import { Effects, Store, createConnectedStore } from 'undux';
import effects from "./effects";
import { PageTypes } from '../constants/PageTypes';

type State = {
    pageDisplayed: PageTypes
}

const initialState: State = {
    pageDisplayed: PageTypes.NAME_PLATE
}

export default createConnectedStore(initialState, effects);

export type StoreProps = {
    store: Store<State>
}

export type StoreEffects = Effects<State>