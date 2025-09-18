import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import dotenv from "dotenv";
import { google } from "googleapis";

import { z } from "zod";

dotenv.config();

const server = new McpServer({
    name: "Emon's Calender",
    version: "1.0.0",
});

async function getMyCalendarDataByDate(date) {
    const Calendar = google.calendar({
        version: "v3",
        auth: process.env.GOOGLE_PUBLIC_API_KEY,
    });

    const start = new Date(date);
    start.setUTCHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setUTCDate(end.getUTCDate() + 1);

    try{
        const res = await Calendar.events.list({
            calendarId: process.env.CALENDER_ID,
            timeMin: start.toISOString(),
            timeMax: end.toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: "startTime",
        });

        const events = res.data.items || [];
        const meetings = events.map((event) => {
            const start = event.start.dateTime || event.start.date;
            return `${event.summary} at ${start}`;
        });

        if(meetings.length > 0){
            return {
                meetings,
            };
        }
        else {
            return {
                meetings: [],
            };
        }
    }
    catch(err){
        return {
            error: err.message,
        }
    }
}

server.tool(
    'getMyCalendarDataByDate',
    {
        date: z.string().refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format. Please provide a valid date string.",
        }),
    },
    async ({ date }) => {
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(await getMyCalendarDataByDate(date)),
                },
            ],
        };
    }
);

async function init() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}

init();