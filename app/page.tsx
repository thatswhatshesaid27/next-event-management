import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { events } from "@/lib/constants"

const page = () => {
  return (
    <div>
      <h1 className="text-center">Event hub for every NERD/GEEKY </h1>
      <p className="text-center mt-5">Hackathons,meetups & conferences, All in one platform</p>
      <ExploreBtn/>
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {
            events.map((event) => (
              <li key={event.title}>
                <EventCard {...event}/>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default page
