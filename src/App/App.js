import React, {useEffect, useState} from "../../snowpack/pkg/react.js";
import {CalendarHeader} from "../CalendarHeader/index.js";
import {Day} from "../Day/index.js";
import {NewEventModal} from "../NewEventModal/index.js";
import {EditEventModal} from "../EditEventModal/index.js";
import {useDate} from "../hooks/useDate.js";
import {Weeks} from "../Components/Weeks.js";
import {WeekColumn} from "../Components/WeekColumn.js";
import {VIEW_FORMAT, THEME_MODE} from "../Config/enum.js";
import {nanoid} from "../../snowpack/pkg/nanoid.js";
import {useSelector} from "../../snowpack/pkg/react-redux.js";
import {DayView} from "../Components/DayView.js";
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
  const [events, setEvents] = useState(localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : []);
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "container"
  }, /* @__PURE__ */ React.createElement(CalendarHeader, {
    dateDisplay,
    onNext: () => setNav(nav + 1),
    onBack: () => setNav(nav - 1),
    view,
    setActiveTheme: () => setActiveTheme(activeTheme === THEME_MODE.Light ? THEME_MODE.Dark : THEME_MODE.Light),
    activeTheme
  }), view === VIEW_FORMAT.Month || view === VIEW_FORMAT.Week ? /* @__PURE__ */ React.createElement(Weeks, {
    view,
    weekDisplay
  }) : "", view === VIEW_FORMAT.Month ? /* @__PURE__ */ React.createElement("div", {
    id: "calendar"
  }, days.map((d, index) => /* @__PURE__ */ React.createElement(Day, {
    key: index,
    day: d,
    onClick: () => {
      if (d.value !== "padding") {
        setClicked(d.date);
      }
    }
  }))) : "", view === VIEW_FORMAT.Week ? /* @__PURE__ */ React.createElement(WeekColumn, {
    events,
    weekDisplay,
    setClicked
  }) : null, view === VIEW_FORMAT.Day ? /* @__PURE__ */ React.createElement(DayView, {
    events,
    dayDisplay,
    setClicked
  }) : null), clicked && !eventForDate(clicked) && /* @__PURE__ */ React.createElement(NewEventModal, {
    onClose: () => setClicked(null),
    onSave: (title) => {
      setEvents([...events, {title, date: clicked, id: nanoid(), createdAt: Date.now()}]);
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
