import React from 'react';

export default ({ pageContext: { author } }) => {
  const { fullName, photo, description, birth, death, biography, works } = author;

  return (
    <section>
      <div className='author-page'>
        <h1>
          {fullName}
        </h1>
        <p>{birth.date} - {death.date}</p>
        <div>
          <img src={photo.link} alt={`${fullName}. Фотография`}/>
        </div>
        <p>{description}</p>
        {/* <TimeLine dataList={biography}/> */}
        {/* <AuthorWorkList  dataList={works}> */}
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
  );
}
