import ExploreBtn from "@/components/ExploreBtn"


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
            [1, 2, 3,4,5].map((event) => (
              <li key={event} >
                Event {event}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default page
