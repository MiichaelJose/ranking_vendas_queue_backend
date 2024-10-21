import { DateTime } from 'luxon'

const prepareDateFilter = {
    start(date: Date | string): DateTime {
        return date
            ? DateTime.fromJSDate(new Date(date))
            : DateTime.fromJSDate(new Date(2022, 0, 1))
    },
    end(date: Date | string): DateTime {
        return date ? DateTime.fromJSDate(new Date(date)) : DateTime.now()
    },
}

export { prepareDateFilter }
