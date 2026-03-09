import { NextResponse, NextRequest } from "next/server";
import ConnectDB from "@/lib/mongoose";
import Event from '@/database/event.model';
console.log("Database connection function imported successfully")


export async function POST(req: NextRequest) {
  try {
    await ConnectDB()

    const formData = await req.formData()
    let events: any = Object.fromEntries(formData.entries())

    console.log("Events BEFORE:", events)

    if (events.agenda) {
      events.agenda = JSON.parse(events.agenda)
    }

    if (events.tags) {
      events.tags = JSON.parse(events.tags)
    }

    console.log("Events AFTER:", events)

    const createEvent = await Event.create(events)

    return NextResponse.json({
      message: "Event created successfully",
      event: createEvent
    }, { status: 201 })

  } catch (error: any) {
    console.log("ERROR:", error)
    console.log("ERROR MESSAGE:", error.message);
  console.log("ERROR STACK:", error.stack);

    return NextResponse.json({
      error: error.message
    }, { status: 500 })
  }
}