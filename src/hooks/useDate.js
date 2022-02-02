import React, {useEffect, useState} from 'react';
import {WEEKDAYS} from "@/utils/constant";
import {useSelector} from "react-redux";
import {VIEW_FORMAT} from "../Config/enum";

export const useDate = (events, nav) => {
  const [dateDisplay, setDateDisplay] = useState('');
  const [weekDisplay, setWeekDisplay] = useState([]);
  const [dayDisplay, setDayDisplay] = useState('');
  const [days, setDays] = useState([]);
  const view = useSelector((state) => state.view.value);

  const eventForDate = date => events.find(e => e.date === date);
  const monthInText = (date) => date.toLocaleDateString('en-us', {month: 'long'});

  useEffect(() => {
    const dt = new Date();
    let currentWeek = [];
    let dateDisplayByView = '';
    const year = dt.getFullYear();

    switch (view) {
      case VIEW_FORMAT.Day:
        dt.setDate(dt.getDate() + nav);
        setDayDisplay(dt);
        dateDisplayByView = `${dt.toLocaleDateString('en-us', {month: 'long'})}, 
        ${dt.getDate().toString().padStart(2, '0')}, ${year}`;
        break;
      case VIEW_FORMAT.Week:
        const parseDate = (number) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() - dt.getDay() + number + (nav * 7));

        for (let j = 0; j <= 6; j++) {
          currentWeek.push(parseDate(j));
        }
        setWeekDisplay(currentWeek);
        dateDisplayByView = `${monthInText(currentWeek[0])} ${currentWeek[0].getDate()} - 
        ${monthInText(currentWeek[currentWeek.length - 1])} ${currentWeek[currentWeek.length - 1].getDate()}, ${year}`
        break;
      case VIEW_FORMAT.Month:
        if (nav !== 0) {
          dt.setDate(1);
          dt.setMonth(new Date().getMonth() + nav);
        }
        dateDisplayByView = `${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`
        break;
      default:
        break;
    }

    const day = dt.getDate();
    const month = dt.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    setDateDisplay(dateDisplayByView);
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
    dayDisplay,
  };
};
