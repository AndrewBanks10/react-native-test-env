
import 'react-native-mock-render/mock'
import React from 'react'
import setupTests from './setup'
import { setAppMount } from './projectsetup'
import App from '../src/react-components/App'

setAppMount(setupTests(<App />))
