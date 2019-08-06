import { Effects, Store, createConnectedStore } from 'undux';
import effects from "./effects";

type State = {
    enterClicked: Boolean
}

const initialState: State = {
    enterClicked: false
}

export default createConnectedStore(initialState, effects);

export type StoreProps = {
    store: Store<State>
}

export type StoreEffects = Effects<State>