import React from "react"

export default ({ pageContext: { author } }) => (
  <section>
    <div className="author-page">
      <h1>
        {author.name} {author.surname}
      </h1>
      <div>Years of life</div>
      <div>Her/his picture</div>
      <div>Biography in the form of timeline (example here)</div>
      <div>List of artist's works with the date of creation</div>
      <div>
        Photo gallery with author's picture and pictures of his/her works
      </div>
      <div>
        Youtube video about the author / works / period of time author lived.
        Video must open in a new overlay (modal)
      </div>
      <div>
        Place of author's major activity on a map: google / openstreetmap
        (leaflet) / yandex
      </div>
      <div>
        It's okay if not every element (timeline, video, photo gallery, map)
        will be present on every page
      </div>
    </div>
  </section>
)
