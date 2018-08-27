import {
  testCauseAndEffectWithText,
  verifyTextInput,
  verifyPicker,
  verifySwitch
} from '../../../../test/projectsetup'

describe('View Main', function () {
  it(`Test Button - validated.`, function (done) {
    testCauseAndEffectWithText('#increment', '#counter', `Counter: 1`, done)
  })
  it(`Test TextInput field - validated.`, function (done) {
    verifyTextInput('#textInput', 'test input', done)
  })
  it(`Test Picker - validated.`, function (done) {
    verifyPicker('#picker', 'Javascript', done)
  })
  it(`Test Switch - validated.`, function (done) {
    verifySwitch('#switch', true, done)
  })
})
