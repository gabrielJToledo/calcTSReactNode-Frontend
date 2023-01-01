import { action } from 'typesafe-actions'
import { CalcTypes } from './types'
// import { IDisplay } from '../../../domain/interfaces/display.interface'

export const changedDisplayValue = (payload: string) => action(CalcTypes.changedDisplayValue, payload)