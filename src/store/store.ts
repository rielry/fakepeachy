import { Effects, Store, createConnectedStore } from 'undux';
import effects from "./effects";
import { PageTypes, PanelTypes } from '../constants/PageTypes';

type State = {
    pageDisplayed: PageTypes,
    panelDisplayed: PanelTypes
}

const initialState: State = {
    pageDisplayed: PageTypes.NAME_PLATE,
    panelDisplayed: PanelTypes.ABOUT
}

export default createConnectedStore(initialState, effects);

export type StoreProps = {
    store: Store<State>
}

export type StoreEffects = Effects<State>