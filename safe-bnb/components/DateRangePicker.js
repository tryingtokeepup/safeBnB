import DayPickerInput from 'react-day-picker/DayPickerInput';

export default () => (
  <div className="date-range-picker-container">
    <div>
      <label>From:</label>
      <DayPickerInput />
    </div>
    <div>
      <label>To:</label>
      <DayPickerInput />
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
