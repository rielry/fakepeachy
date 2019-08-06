import {StoreEffects} from "./store"

let effects: StoreEffects = store => {
    store.on("enterClicked")
    .subscribe(enterClicked => console.log("enterClicked"));
    return store;
}

export default effects;