import { isAfter } from 'date-fns'

export const minDateValidator = (minDate) => (value) => isAfter(value, minDate)
