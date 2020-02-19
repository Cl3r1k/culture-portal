import React from "react"
import AuthorCard from "../components/AuthorCard/AuthorCard"
import Table from "../components/Table/Table"
import TableRow from "../components/TableRow/TableRow"
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"
import Map from "../components/author/Map/Map"
import { AUTHOR_WORKS } from "../helpers/Constants"
const { TABLE_CAPTION, COLUMN_CAPTIONS } = AUTHOR_WORKS

export default ({ pageContext: { author } }) => {
  const { id, biography, works } = author

  return (
    <section>
      <div className="author-page">
        <AuthorCard author={author} />

        <Timeline lineColor={"#dddddd"}>
          {biography.map(({ date, description }, index) => {
            return (
              <TimelineItem
                key={`${id}${index}`}
                dateText={date}
                style={{ color: "#e86971" }}
              >
                <p>{description}</p>
              </TimelineItem>
            )
          })}
        </Timeline>

        <Table caption={TABLE_CAPTION}>
          <thead>
            <TableRow data={COLUMN_CAPTIONS} isHeadRow={true} />
          </thead>
          <tbody>
            {works.map((work, index) => {
              return (
                <TableRow data={work} isHeadRow={false} key={`${id}${index}`} />
              )
            })}
          </tbody>
        </Table>

        <div>
          Photo gallery with author's picture and pictures of his/her works
        </div>
        <div>
          Youtube video about the author / works / period of time author lived.
          Video must open in a new overlay (modal)
        </div>
        <Map data={author} />
        <div>
          It's okay if not every element (timeline, video, photo gallery, map)
          will be present on every page
        </div>
      </div>
    </section>
  )
}
