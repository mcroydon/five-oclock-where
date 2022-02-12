import { getTimeZones } from "@vvo/tzdb";
import { DateTime } from "luxon";

import {describe, expect, test} from '@jest/globals'

describe('Testing to see if its five oclock somewhere every minute of the day.', () => {

    

function makeDates() {
    let times = [];
    // Start at midnight UTC
    let dt = DateTime.utc(2022,1,1,0,0);
    // End at midnight the next day
    const end = DateTime.utc(2022,1,2,0,0);
    // Get all timezones
    const timeZones = getTimeZones();
    // Add all DateTimes in between
    while (dt < end) {
        times.push(dt);
        dt = dt.plus({'minutes' : 1});
    }
    return times;
  };

test.concurrent.each(makeDates())("It's five o'clock %o", (dt) => {
    // For each minute in the day, ensure that it's five o'clock somewhere.   
    const timeZones = getTimeZones(); 
    expect(timeZones.filter(
        tz => dt.setZone(tz.name).hour == 17
    ).length).toBeGreaterThan(0);
})

});
