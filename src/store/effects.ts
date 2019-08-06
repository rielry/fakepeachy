import {StoreEffects} from "./store"

let effects: StoreEffects = store => {
    store.on("enterClicked")
    return store;
}

export default effects;