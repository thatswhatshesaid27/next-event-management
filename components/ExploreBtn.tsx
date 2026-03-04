'use client'
const ExploreBtn = () => {
  return (
    <div>
        <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={()=>console.log("Button Clicked")}>

            <a href="#events">Explore events</a>
        </button>
      
    </div>
  )
}

export default ExploreBtn
