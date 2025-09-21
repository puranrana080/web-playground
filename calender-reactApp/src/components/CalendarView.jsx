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
  const {selectedDoctor} = useSelector((state)=>state.doctor)
  const [selectedRange, setSelectedRange] = useState(null);
  const [availabilityModalOpen, setAvailabilityModalOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = selectedDoctor?events.filter((event)=>event.doctorId===selectedDoctor.id):events;

  const handleSelect = (selectInfo) => {
    const now = new Date();
    if (selectInfo.end <= now) {
      alert("Cannot set availability for past time");
      calendarRef.current.getApi().unselect();
      return;
    }
    setSelectedRange(selectInfo);
    setAvailabilityModalOpen(true);
  };

  const handleAddEvent = (status, duration = 15) => {
    let start = new Date(selectedRange.start);
    const end = new Date(selectedRange.end);

    if (status === "available") {
      while (start < end) {
        const slotEnd = new Date(start.getTime() + duration * 60 * 1000);
        if (slotEnd > end) break;
        dispatch(
          addEvent({
            title: status,
            start: start.toISOString(),
            end: slotEnd.toISOString(),
            doctorId:selectedDoctor.id,
            color: status === "available" ? "#d8fabaff" : "#beaaaaff",
            textColor: status === "available" ? "#000" : "#fff",
          })
        );
        start = slotEnd;
      }
    } else {
      // Just one big block for unavailable
      dispatch(
        addEvent({
          title: status,
          start: start.toISOString(),
          end: end.toISOString(),
          doctorId:selectedDoctor.id,
          color: "#beaaaaff", // muted color for unavailable
          textColor: "#fff",
        })
      );
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
          slotMinTime={slotMinTime}
          slotMaxTime={slotMaxTime}
          slotLabelClassNames={() => ["time-label"]}
          slotDuration="00:15:00"
          slotLabelInterval="00:15:00"
          slotLabelFormat={{
            hour: "2-digit",
            minute: "2-digit",
            omitZeroMinute: false,
            // meridiem: "short",
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
              text: "🟢 Available 🔴 Unavailable",
              click: () => {},
            },
          }}
          selectable={true}
          select={handleSelect}
          allDaySlot={false}
          events={filteredEvents}
          eventContent={(arg) => (
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
          )}
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
