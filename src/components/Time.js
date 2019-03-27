/* eslint-disable no-fallthrough */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const hours = Array.apply(0, { length: 24 })
  .map(String.call, String)
  .map(x => x.padStart(2, '0'));
const minutes = Array.apply(0, { length: 60 })
  .map(String.call, String)
  .map(x => x.padStart(2, '0'));

class Time extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      hours: hours[0],
      minutes: minutes[0],
    };

    this.onTimeSelection = this.onTimeSelection.bind(this);
  }

  onTimeSelection(selection) {
    this.setState(selection, this.props.onTimeSelection({ ...this.state, ...selection }));
  }

  render() {
    return (
      <div className="calendar-time">
        <div>
          <select
            className="hourselect"
            defaultValue={0}
            onChange={event => this.onTimeSelection({ hours: event.target.value })}>
            {hours.map((hour, i) => (
              <option key={`${hour}_${i}`} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          :
          <select
            className="minuteselect"
            defaultValue={0}
            onChange={event => this.onTimeSelection({ minutes: event.target.value })}>
            {minutes.map((minute, i) => (
              <option key={`${minute}_${i}`} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </div>
        <i className="fa fa-clock-o glyphicon glyphicon-time" />
      </div>
    );
  }
}

Time.propTypes = {
  onTimeSelection: PropTypes.func,
};

export default Time;
