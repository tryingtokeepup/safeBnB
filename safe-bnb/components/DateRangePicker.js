import DayPickerInput from 'react-day-picker/DayPickerInput';
import dateFNSFormat from 'date-fns/format';
import dateFNSParse from 'date-fns/parse';
import { DateUtils } from 'react-day-picker';
import { useState } from 'react';

const parseDate = (string, format, locale) => {
  const parsed = dateFNSParse(string, format, new Date(), { locale });
  // check if parsed is date, and if so, pass parsed in, and if not, null it
  return DateUtils.isDate(parsed) ? parsed : null;
};

// can't pass this as an object, must be straight transformation?
// what is diff between    => {somefunction()} and => someFunction()
const formatDate = (date, format, locale) =>
  dateFNSFormat(date, format, { locale });

const format = 'dd MMM yyyy';

const today = new Date();
// I guess this is to make sure that they are instantiated with the exact same values, so we don't get weird bugs
// when the two variables MIGHT be off if one is made just before midnight and the other is made at midnight
const tomorrow = new Date(today);
// set tomorrow one day after today
tomorrow.setDate(tomorrow.getDate() + 1);

// make function to count diff between two dates
const diffNightsBetweenDates = (startDate, endDate) => {
  const start = new Date(startDate); // clone the dates so we don't mutate original data
  const end = new Date(endDate);
  let nightCount = 0;

  while (end > start) {
    nightCount += 1;
    start.setDate(start.getDate() + 1);
  }
  return nightCount;
};

export default () => {
  // pass in today and tomorrow into state
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);

  return (
    <div className="date-range-picker-container">
      <div>
        <label>From:</label>
        <DayPickerInput
          formatDate={formatDate}
          format={format}
          value={startDate}
          parseDate={parseDate}
          placeholder={`${dateFNSFormat(new Date(), format)}`}
          dayPickerProps={{
            modifiers: {
              disabled: {
                before: new Date()
              }
            }
          }}
          onDayChange={selectedDay => {
            setStartDate(selectedDay);
            if (diffNightsBetweenDates(selectedDay, endDate) < 1) {
              const newEndDate = new Date(selectedDay);
              newEndDate.setDate(newEndDate.getDate() + 1);
              // can we use a callback to send a console log confirming this change?
              setEndDate(newEndDate);
              // can we use a callback to send a console log confirming this change?
              // test: guess we can't; that's been depreciated/not supported
              //   setEndDate(newEndDate, () => {
              //     console.log('changing endDate to one day after startDate!');
              //   });
            }
          }}
        />
      </div>
      <div>
        <label>To:</label>
        <DayPickerInput
          formatDate={formatDate}
          format={format}
          value={endDate}
          parseDate={parseDate}
          placeholder={`${dateFNSFormat(new Date(), format)}`}
          dayPickerProps={{
            modifiers: {
              disabled: [
                //   instantiate a new Date() object to get today's date, and then disable any date before that date
                startDate,
                {
                  before: startDate
                }
              ]
            }
          }}
          onDayChange={selectedDay => {
            setEndDate(selectedDay);
          }}
        />
      </div>
      <style jsx>{`
        .date-range-picker-container div {
          display: grid;
          border: 1px solid #ddd;
          grid-template-columns: 30% 70%;
          padding: 10px;
        }

        label {
          padding-top: 10px;
        }
      `}</style>
      <style jsx global>{`
        .DayPickerInput input {
          width: 120px;
          padding: 10px;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};
