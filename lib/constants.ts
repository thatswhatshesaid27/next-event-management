export type EventItem={
    image:string,
    title:string,
    slug?:string,
    location?:string,
    date?:string,
    time?:string
}

export const events:EventItem[]=[
    {
      image:'/images/event1.png',
        title:'Hacktoberfest 2023',
        slug:'hacktoberfest-2023',
        location:'Online',
        date:'October 1-31, 2023',  
        time:'All day',
    },
    {
      image:'/images/event2.png',
        title:'React Summit 2023',
        slug:'react-summit-2023',
        location:'Amsterdam, Netherlands',
        date:'June 15-16, 2023',
        time:'9:00 AM - 6:00 PM',
    } 

]