import React, {useState, useEffect} from "../../snowpack/pkg/react.js";
import {CalendarHeader} from "../CalendarHeader/index.js";
import {Day} from "../Day/index.js";
import {NewEventModal} from "../NewEventModal/index.js";
import {EditEventModal} from "../EditEventModal/index.js";
import {useDate} from "../hooks/useDate.js";
import {nanoid} from "../../snowpack/pkg/nanoid.js";
export const App = () => {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : []);
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
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
  const {days, dateDisplay} = useDate(events, nav);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "container"
  }, /* @__PURE__ */ React.createElement(CalendarHeader, {
    dateDisplay,
    onNext: () => setNav(nav + 1),
    onBack: () => setNav(nav - 1)
  }), /* @__PURE__ */ React.createElement("div", {
    id: "weekdays"
  }, weekdays.map((weekday) => /* @__PURE__ */ React.createElement("div", {
    key: nanoid()
  }, weekday))), /* @__PURE__ */ React.createElement("div", {
    id: "calendar"
  }, days.map((d, index) => /* @__PURE__ */ React.createElement(Day, {
    key: index,
    day: d,
    onClick: () => {
      if (d.value !== "padding") {
        setClicked(d.date);
      }
    }
  })))), clicked && !eventForDate(clicked) && /* @__PURE__ */ React.createElement(NewEventModal, {
    onClose: () => setClicked(null),
    onSave: (title) => {
      setEvents([...events, {title, date: clicked, id: nanoid()}]);
      setClicked(null);
    }
  }), clicked && eventForDate(clicked) && /* @__PURE__ */ React.createElement(EditEventModal, {
    eventText: eventForDate(clicked).title,
    onSave: (title) => {
      updateEventById(title);
      setClicked(null);
    },
    onClose: () => setClicked(null),
    onDelete: () => {
      setEvents(events.filter((e) => e.date !== clicked));
      setClicked(null);
    }
  }));
};
