
import { legacy_createStore as createStore } from "redux";
import rootReducers from "../Reducer/reducer";



const store = createStore(rootReducers);

export default store;