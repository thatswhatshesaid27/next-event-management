import { Schema, model, models, Document, Types } from "mongoose";
import Event from "./event.model";

export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: [true, "Event ID is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
  },
  { timestamps: true }
);

BookingSchema.pre("save", async function (next) {
  const booking = this as IBooking;

  if (booking.isModified("eventId") || booking.isNew) {
    try {
      const eventExists = await Event.findById(booking.eventId).select("_id");

      if (!eventExists) {
        return next(new Error(`Event not found with ID ${booking.eventId}`));
      }

      next();
    } catch (error) {
      return next(error as Error);
    }
  } else {
    next();
  }
});

BookingSchema.index({eventId:1});
BookingSchema.index({eventId:1, createdAt:-1 });
BookingSchema.index({email:1})
const Booking =models.Booking || model<IBooking>("Booking", BookingSchema);

export default Booking;