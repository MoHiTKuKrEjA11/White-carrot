import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const Calendar = ({ token }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const CLIENT_ID = "96709536590-sk8rp1h2q5rlddairlqdl1599mh0c22j.apps.googleusercontent.com";  // Replace with your actual client ID
  const API_KEY = "AIzaSyDTgKaLXGjfpdZKwpmv_r9NXoMvOI2uftc";  // Replace with your actual API key
  const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
  const DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

  useEffect(() => {
    const loadGapiClient = async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: [DISCOVERY_DOC],
        scope: SCOPES,
      });
      fetchEvents();
    };

    if (token) {
      gapi.load("client:auth2", loadGapiClient);
    }
  }, [token]);

  const fetchEvents = async () => {
    try {
      // Initialize the Google API client
      gapi.auth.setToken({ access_token: token });

      // Request the user's calendar events
      const response = await gapi.client.calendar.events.list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        maxResults: 10,
        orderBy: "startTime",
        singleEvents: true,
      });

      const events = response.result.items;
      if (events.length === 0) {
        setEvents(["No events found."]);
      } else {
        setEvents(events.map((event) => `${event.summary} (${event.start.dateTime || event.start.date})`));
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      setEvents(["Failed to fetch events"]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading events...</p>;
  }

  return (
    <div>
      <h2>Your Upcoming Google Calendar Events:</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Calendar;
