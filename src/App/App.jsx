import React, { useState, useEffect } from "react";
import { CalendarHeader } from "../CalendarHeader";
import { Day } from "../Day";
import { NewEventModal } from "../NewEventModal";
import { EditEventModal } from "../EditEventModal";
import { useDate } from "../hooks/useDate";
import { nanoid } from "nanoid";

export const App = () => {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const eventForDate = (date) => events.find((e) => e.date === date);
  const updateEventById = (title) => {
    events.map((item) => {
      if (item.id === eventForDate(clicked).id) {
        item.title = title;
        item.date = clicked;
        item.id = eventForDate(clicked).id;
        return item;
      }
    });
    localStorage.setItem("events", JSON.stringify(events));
  };

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const { days, dateDisplay } = useDate(events, nav);

  return (
    <>
      <div id="container">
        <CalendarHeader
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        />

        <div id="weekdays">
          {weekdays.map((weekday) => (
            <div key={nanoid()}>{weekday}</div>
          ))}
        </div>

        <div id="calendar">
          {days.map((d, index) => (
            <Day
              key={index}
              day={d}
              onClick={() => {
                if (d.value !== "padding") {
                  setClicked(d.date);
                }
              }}
            />
          ))}
        </div>
      </div>

      {clicked && !eventForDate(clicked) && (
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={(title) => {
            setEvents([...events, { title, date: clicked, id: nanoid() }]);
            setClicked(null);
          }}
        />
      )}

      {clicked && eventForDate(clicked) && (
        <EditEventModal
          eventText={eventForDate(clicked).title}
          onSave={(title) => {
            updateEventById(title);
            setClicked(null);
          }}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setEvents(events.filter((e) => e.date !== clicked));
            setClicked(null);
          }}
        />
      )}
    </>
  );
};