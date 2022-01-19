import React, {useState, useEffect} from "../../snowpack/pkg/react.js";
import {CalendarHeader} from "../CalendarHeader/index.js";
import {Day} from "../Day/index.js";
import {NewEventModal} from "../NewEventModal/index.js";
import {DeleteEventModal} from "../DeleteEventModal/index.js";
import {useDate} from "../hooks/useDate.js";
export const App = () => {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : []);
  const eventForDate = (date) => events.find((e) => e.date === date);
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
  }, /* @__PURE__ */ React.createElement("div", null, "Sunday"), /* @__PURE__ */ React.createElement("div", null, "Monday"), /* @__PURE__ */ React.createElement("div", null, "Tuesday"), /* @__PURE__ */ React.createElement("div", null, "Wednesday"), /* @__PURE__ */ React.createElement("div", null, "Thursday"), /* @__PURE__ */ React.createElement("div", null, "Friday"), /* @__PURE__ */ React.createElement("div", null, "Saturday")), /* @__PURE__ */ React.createElement("div", {
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
      setEvents([...events, {title, date: clicked}]);
      setClicked(null);
    }
  }), clicked && eventForDate(clicked) && /* @__PURE__ */ React.createElement(DeleteEventModal, {
    eventText: eventForDate(clicked).title,
    onClose: () => setClicked(null),
    onDelete: () => {
      setEvents(events.filter((e) => e.date !== clicked));
      setClicked(null);
    }
  }));
};
