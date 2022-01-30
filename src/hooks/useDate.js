import React, {useEffect, useState} from 'react';
import {WEEKDAYS} from "../utils/constant";
import {useSelector} from "react-redux";

export const useDate = (events, nav) => {
  const [dateDisplay, setDateDisplay] = useState('');
  const [weekDisplay, setWeekDisplay] = useState([]);
  const [days, setDays] = useState([]);
  const view = useSelector((state) => state.view.value);

  const eventForDate = date => events.find(e => e.date === date);

  useEffect(() => {
    const dt = new Date();

    if (nav !== 0) {
      dt.setDate(1);
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    let newVal = [];
    const nD = new Date();
    for (let j = 0; j <= 6; j++) {
      newVal.push(new Date(nD.setDate(nD.getDate() - nD.getDay() + j)));
    }
    setWeekDisplay(newVal);

    // switch case
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    setDateDisplay(`${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`);
    const paddingDays = WEEKDAYS.indexOf(dateString.split(', ')[0]);

    const daysArr = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          event: eventForDate(dayString),
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: 'padding',
          event: null,
          isCurrentDay: false,
          date: '',
        });
      }
    }
    setDays(daysArr);
  }, [events, nav, view]);

  return {
    days,
    dateDisplay,
    weekDisplay,
  };
};
