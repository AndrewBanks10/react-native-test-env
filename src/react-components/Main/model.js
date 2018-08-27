export const reducerKey = 'counter'

export const initialState = {
  counter: 0,
  text: '',
  pickerValue: 'React',
  switchValue: false
}

let reducerState
export const storeIsDefinedCallback = (store, stateAccessors) =>
  ({reducerState} = stateAccessors(store, reducerKey, initialState))

export const serviceFunctions = {
  increment: () => {
    reducerState.counter++
  },
  changeText: value => {
    reducerState.text = value
  },
  changePickerValue: value => {
    reducerState.pickerValue = value
  },
  changeSwitchValue: value => {
    reducerState.switchValue = value
  }
}

export const noStoreParameterOnServiceFunctions = true
