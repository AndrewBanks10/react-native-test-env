const waitTime = 2000
let intervalID
let appMount

export const setAppMount = mountedNode =>
  (appMount = mountedNode)

//
// React rendering is asynchronous. Components must be validated asynchronously.
//
const handleReactAsync = (done, startTime, waitTime, callbackCheck) => {
  // The callback checks that the conditions for success have been met
  if (callbackCheck()) {
    clearInterval(intervalID)
    done()
  // Timeout means failure.
  } else if (new Date() - startTime > waitTime) {
    clearInterval(intervalID)
    done(new Error('Timeout'))
  }
  update()
}

const handleReactAsyncStart = (done, waitTime, callbackCheck) => {
  intervalID = setInterval(handleReactAsync, 10, done, new Date(), waitTime, callbackCheck)
}

export const findNode = selector => {
  if (typeof selector === 'function') {
    return appMount.findWhere(selector)
  }
  return appMount.find(selector)
}

export const findNodeFunction = id =>
  n => n.props().testID === id

export const nodeExists = selector => findNode(selector).first().exists()
export const nodeString = selector => findNode(selector).first().text()
export const nodeValue = selector => findNode(selector).props().value
export const simulateClick = selector => findNode(selector).first().props().onPress()
export const simulateInput = (selector, value) => findNode(selector).first().props().onChangeText(value)
export const onValueChange = (selector, value) => findNode(selector).first().props().onValueChange(value)
export const update = () => appMount.update()
export { appMount }

export const pressButton = selector => simulateClick(selector)
export const changePickerValue = (selector, value) => onValueChange(selector, value)
export const changeSwitchValue = (selector, value) => onValueChange(selector, value)
export const getValue = selector => findNode(selector).props().value
export const getTextValue = selector => findNode(selector).first().text()
export const getTextInputValue = selector => getValue(selector)
export const getPickerValue = selector => findNode(selector).props().selectedValue
export const getSwitchValue = selector => getValue(selector)

export const testCauseAndEffectWithExists = (causeSelector, effectSelector, done) => {
  pressButton(causeSelector)
  handleReactAsyncStart(done, waitTime, () =>
    nodeExists(effectSelector)
  )
}

export const testCauseAndEffectWithNotExists = (causeSelector, effectSelector, done) => {
  pressButton(causeSelector)
  handleReactAsyncStart(done, waitTime, () =>
    !nodeExists(effectSelector)
  )
}

export const testCauseAndEffectWithText = (causeSelector, effectSelector, expectedText, done) => {
  pressButton(causeSelector)
  handleReactAsyncStart(done, waitTime, () =>
    getTextValue(effectSelector) === expectedText
  )
}

export const verifyTextInput = (causeSelector, inputValue, done) => {
  simulateInput(causeSelector, inputValue)
  handleReactAsyncStart(done, waitTime, () =>
    getTextInputValue(causeSelector) === inputValue
  )
}

export const verifyPicker = (causeSelector, inputValue, done) => {
  changePickerValue(causeSelector, inputValue)
  handleReactAsyncStart(done, waitTime, () =>
    getPickerValue(causeSelector) === inputValue
  )
}

export const verifySwitch = (causeSelector, inputValue, done) => {
  changeSwitchValue(causeSelector, inputValue)
  handleReactAsyncStart(done, waitTime, () =>
    getSwitchValue(causeSelector) === inputValue
  )
}
