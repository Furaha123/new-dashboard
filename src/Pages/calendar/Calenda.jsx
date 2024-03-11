import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../theme";
import Header from "../../components/header/Header";

function Calenda() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event ");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr} - ${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handlerEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event "${selected.event.title}"`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px" display="flex">
      <Box
        flex="1 1 20%"
        backgroundColor={colors.primary[50]}
        p="15px"
        borderRadius="4px"
        boxShadow="2px 4px 10px 1px rgba(0, 0, 0, 0.47)"
      >
        <Typography variant="h5">Events</Typography>
        <List>
          {currentEvents.map((event) => (
            <ListItem
              key={event.id}
              sx={{
                backgroundColor: colors.greenAccent[100],
                margin: "10px 0",
                borderRadius: "2px",
              }}
            >
              <ListItemText
                primary={
                  <Typography style={{ color: "white" }}>
                    {event.title}
                  </Typography>
                }
                secondary={
                  <Typography style={{ color: "#fff" }}>
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box flex="1 1 100%" ml="15px">
        <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
        <FullCalendar
          height="70vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next,today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          select={handleDateClick}
          dayMaxEvents={true}
          weekends={true}
          eventClick={handlerEventClick}
          eventsSet={(events) => {
            setCurrentEvents(events);
          }}
          initialEvents={[
            {
              id: "12315",
              title: "All-day event",
              date: "2023-11-14",
            },
            {
              id: "5123",
              title: "Timed event",
              date: "2023-11-28",
            },
          ]}
        />
      </Box>
    </Box>
  );
}

export default Calenda;
