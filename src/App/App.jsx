import React, {useEffect, useState} from "react";
import {CalendarHeader} from "../CalendarHeader";
import {Day} from "../Day";
import {NewEventModal} from "../NewEventModal";
import {EditEventModal} from "../EditEventModal";
import {useDate} from "@/hooks/useDate";
import {Weeks} from "@/Components/Weeks";
import {WeekColumn} from "@/Components/WeekColumn";
import {VIEW_FORMAT, THEME_MODE} from "@/Config/enum";
import {nanoid} from 'nanoid'
import {useSelector} from 'react-redux'
import {DayView} from "@/Components/DayView";

export const App = () => {
  const view = useSelector((state) => state.view.value);

  const [activeTheme, setActiveTheme] = useState(THEME_MODE.Light);
  useEffect(() => {
    document.body.classList.add(activeTheme);
  
    return function cleanup() {
      document.body.classList.remove(activeTheme);
    };
  }, [activeTheme]);

  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );

  const {days, dateDisplay, weekDisplay, dayDisplay} = useDate(events, nav);

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

  useEffect(() => {
    setNav(0);
  }, [view]);

  return (
    <>
      <div id="container">
        <CalendarHeader
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
          view={view}
          setActiveTheme={() => setActiveTheme(activeTheme === THEME_MODE.Light ? THEME_MODE.Dark : THEME_MODE.Light)}
          activeTheme={activeTheme}
        />

        {view === VIEW_FORMAT.Month || view === VIEW_FORMAT.Week ? (
          <Weeks view={view} weekDisplay={weekDisplay}/>
        ) : (
          ""
        )}

        {view === VIEW_FORMAT.Month ? (
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
        ) : (
          ""
        )}

        {view === VIEW_FORMAT.Week ? <WeekColumn events={events} weekDisplay={weekDisplay} setClicked={setClicked} /> : null}
        {view === VIEW_FORMAT.Day ? <DayView events={events} dayDisplay={dayDisplay} setClicked={setClicked} /> : null}
      </div>

      {clicked && !eventForDate(clicked) && (
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={(title) => {
            setEvents([...events, {title, date: clicked, id: nanoid(), createdAt: Date.now()}]);
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
