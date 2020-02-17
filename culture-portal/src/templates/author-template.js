import React from 'react';
import TableRow from '../components/tableRow/tableRow';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export default ({ pageContext: { author } }) => {
  const { id, fullName, photo, description, birth, death, biography, works } = author;

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
        
        <Timeline lineColor={'#ddd'}>
          {biography.map(
            ({ date, description }, index) => {
              return (
                <TimelineItem
                  key={`${id}${index}`}
                  dateText={date}
                  style={{ color: '#e86971' }}
                >
                  <p>{description}</p>
                </TimelineItem>
              )
            }
            )
          }
        </Timeline>
        
        <table border='1' style={{borderCollapse: 'collapse'}}>
          <caption>Работы автора</caption>
          <thead>
            <tr>
              <th style={{padding: 5}}>
                Дата создания
              </th>
              <th style={{padding: 5}}>
                Название произведения
              </th>
            </tr>
          </thead>
          <tbody>
          {works.map(
              (work, index) => {
                return <TableRow data={work} key={`${id}${index}`}/>
              }
            )
          }
          </tbody>
        </table>

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
