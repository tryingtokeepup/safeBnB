import DayPickerInput from 'react-day-picker/DayPickerInput';
import dateFNSFormat from 'date-fns/format';
import dateFNSParse from 'date-fns/parse';
import { DateUtils } from 'react-day-picker';

const parseDate = (string, format, locale) => {
  const parsed = dateFNSParse(string, format, newDate(), { locale });
  // check if parsed is date, and if so, pass parsed in, and if not, null it
  return DateUtils.isDate(parsed) ? parsed : null;
};

const formatDate = (date, format, locale) => {
  dateFNSFormat(date, format, { locale });
};
const format = 'dd MMM yyyy';

export default () => (
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
