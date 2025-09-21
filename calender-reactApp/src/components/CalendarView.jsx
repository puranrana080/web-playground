import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../redux/calendarSlice";
import AvailabilityModal from "./AvailabilityModal";
import AppointmentModal from "./AppointmentModal";

const CalendarView = () => {
  const dispatch = useDispatch();
  const calendarRef = useRef(null);
  const { events, slotMinTime, slotMaxTime } = useSelector(
    (state) => state.calendar
  );
  const { selectedDoctor } = useSelector((state) => state.doctor);
  const [selectedRange, setSelectedRange] = useState(null);
  const [availabilityModalOpen, setAvailabilityModalOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewType, setViewType] = useState("timeGridWeek");

  const filteredEvents = selectedDoctor
    ? events.filter((event) => event.doctorId === selectedDoctor.id)
    : events;

  const processEvents = (events, viewType) => {
    if (viewType === "dayGridMonth") {
      const grouped = {};

      events.forEach((ev) => {
        const date = ev.start.split("T")[0];
        const key = `${ev.doctorId}-${date}-${ev.title}`;

        if (!grouped[key]) {
         
          
          grouped[key] = {
            start: date,
             end: new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            title:
              ev.title.toLowerCase() === "available"
                ? "Available"
                : "Unavailable",
            backgroundColor: ev.color,
            textColor: ev.textColor,
            extendedProps: { virtual: true },
            allDay: true,
          };
        }
      });

      return Object.values(grouped);
    }

    return events.map(ev => ({
    ...ev,
    allDay: false, // important for week/day to render correctly
    extendedProps: {...ev.extendedProps, virtual: false},
  }));  };

  const handleSelect = (selectInfo) => {
    const now = new Date();
    if (selectInfo.start <= now) {
      alert("Cannot set availability for past time");
      calendarRef.current.getApi().unselect();
      return;
    }
    let start = new Date(selectInfo.start);
  let end = new Date(selectInfo.end);

  if (viewType === "dayGridMonth") {
    const [startHour, startMin] = slotMinTime.split(":").map(Number);
    const [endHour, endMin] = slotMaxTime.split(":").map(Number);

    start.setHours(startHour, startMin, 0, 0);
    end.setHours(endHour, endMin, 0, 0);
  }

    setSelectedRange({start,end});
    setAvailabilityModalOpen(true);
  };

  const handleAddEvent = (status, duration = 15) => {
    let start = new Date(selectedRange.start);
    let end = new Date(selectedRange.end);

    if (viewType === "dayGridMonth") {
      // const [startHour, startMin] = slotMinTime.split(":").map(Number);
      // const [endHour, endMin] = slotMaxTime.split(":").map(Number);

      // start.setHours(startHour, startMin, 0, 0);
      // end.setHours(endHour, endMin, 0, 0);

      // end.setSeconds(end.getSeconds() - 1);
      end = new Date(start.getTime() + 24 * 60 * 60 * 1000);
      dispatch(
      addEvent({
        title: status,
        start: start.toISOString().split("T")[0],
        end: end.toISOString().split("T")[0],   
        doctorId: selectedDoctor.id,
        color: status === "available" ? "#d8fabaff" : "#eedfdfff",
        textColor: status === "available" ? "#000" : "#fff",
        allDay: true,
      })
    );
    }
    else{
       if (status === "available") {
        let tempStart = new Date(start);
      while (tempStart < end) {
        const slotEnd = new Date(tempStart.getTime() + duration * 60 * 1000);
        if (slotEnd > end) break;
        dispatch(
          addEvent({
            title: status,
            start: tempStart.toISOString(),
            end: slotEnd.toISOString(),
            doctorId: selectedDoctor.id,
            color: status === "available" ? "#d8fabaff" : "#eedfdfff",
            textColor: status === "available" ? "#000" : "#fff",
          })
        );
        tempStart = slotEnd;
      }
    } else {
      dispatch(
        addEvent({
          title: status,
          start: start.toISOString(),
          end: end.toISOString(),
          doctorId: selectedDoctor.id,
          color: "#999999",
          textColor: "#fff",
        })
      );
    }

    
  }
  setAvailabilityModalOpen(false);
  calendarRef.current.getApi().unselect();

   
  };

  const handleEventClick = (info) => {
    console.log(info.event.start, info.event.end);
    setSelectedEvent(info.event);
    setAppointmentModalOpen(true);
  };

  return (
    <>
      <div style={{ height: "90vh" }}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          datesSet={(info) => setViewType(info.view.type)}
          slotMinTime={slotMinTime}
          slotMaxTime={slotMaxTime}
          slotDuration="00:15:00"
          slotLabelInterval="00:15:00"
          slotLabelFormat={{
            hour: "2-digit",
            minute: "2-digit",
            omitZeroMinute: false,
          }}
          slotLabelContent={(arg) => (
            <div
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                textAlign: "center",
                borderBottom:
                  arg.date.getMinutes() === 0 ? "1px solid #ccc" : "none",
                padding: "5px 10px",
              }}
            >
              {arg.text}
            </div>
          )}
          headerToolbar={{
            left: "prev timeGridDay,timeGridWeek,dayGridMonth next",
            center: "title",
            right: "legendButton",
          }}
          customButtons={{
            legendButton: {
              text: "🟢 Available 🔴  Unavailable",
              click: () => {},
            },
            hint: "legend",
          }}
          selectable={true}
          select={handleSelect}
          allDaySlot={false}
          events={processEvents(filteredEvents, viewType)}
          dayCellContent={(arg) => {
            // Default date text
            return {
              html: `<div class="fc-day-number">${arg.dayNumberText}</div>`,
            };
          }}
          // eventContent={(arg) => {
          //   if (viewType === "dayGridMonth") {
          //     return (
          //       <div
          //         style={{
          //           display: "flex",
          //           alignItems: "center",
          //           justifyContent: "space-between",
          //           backgroundColor: arg.event.backgroundColor,
          //           borderRadius: "3px",
          //           padding: "2px 4px",
          //           fontSize: "12px",
          //           color: arg.event.textColor,
          //           marginBottom: "2px",
          //         }}
          //       >
          //         <span>
          //           {arg.event.title === "available"
          //             ? "Available"
          //             : "Unavailable"}
          //         </span>
          //         <span>👤</span>
          //       </div>
          //     );
          //   } else {
          //     return (
          //       <div
          //         style={{
          //           position: "relative",
          //           width: "100%",
          //           height: "100%",
          //         }}
          //       >
          //         <span
          //           style={{
          //             position: "absolute",
          //             bottom: 2,
          //             right: 2,
          //             fontSize: "14px",
          //           }}
          //         >
          //           👤
          //         </span>
          //       </div>
          //     );
          //   }
          // }}
          eventContent={(arg) => {
            if (arg.event.extendedProps.virtual) {
              return (
                <div
                  style={{
                    height: "20%",
                    backgroundColor: arg.event.backgroundColor,
                    borderRadius: "3px",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "2px 4px",
                    fontSize: "12px",
                    color: arg.event.textColor,
                  }}
                >
                  <span>{arg.event.title}</span>
                  <span>👤</span>
                </div>
              );
            } else {
              // real time-slot event
              return (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      bottom: 2,
                      right: 2,
                      fontSize: "14px",
                    }}
                  >
                    👤
                  </span>
                </div>
              );
            }
          }}
          eventClick={handleEventClick}
          height="100%"
          dayHeaderFormat={{
            weekday: "long",
            day: "numeric",
          }}
        />
      </div>
      <AvailabilityModal
        open={availabilityModalOpen}
        onClose={() => setAvailabilityModalOpen(false)}
        onSave={handleAddEvent}
      />
      {/* <AppointmentModal
        open={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        event={selectedEvent}
      /> */}
    </>
  );
};

export default CalendarView;
