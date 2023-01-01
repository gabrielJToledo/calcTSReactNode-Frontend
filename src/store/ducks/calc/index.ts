import { IInitialState } from './../../../domain/interfaces/initialState.interface';
import { CalcTypes } from "./types";
import { Reducer } from 'redux'

const initialState: IInitialState = {
    displayValue: []
}

const reducer: Reducer<IInitialState> = (state = initialState, action) => {
    switch (action.type) {
        case CalcTypes.changedDisplayValue:
            return { ...state, displayValue: action.payload}
    
        default:
            return state
    }
}

export default reducer