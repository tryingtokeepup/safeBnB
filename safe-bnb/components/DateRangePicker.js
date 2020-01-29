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

export default () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="date-range-picker-container">
      <div>
        <label>From:</label>
        <DayPickerInput
          formatDate={formatDate}
          format={format}
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
          }}
        />
      </div>
      <div>
        <label>To:</label>
        <DayPickerInput
          formatDate={formatDate}
          format={format}
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
