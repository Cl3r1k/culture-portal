import React from "react"
import { useTranslation } from "react-i18next"
import { useDevelopersMetadata } from '../../hooks/useDevelopers.hook'
import Developer from "../Developer/Developer"
import { DEVELOPERS_LANGUAGE_QUERY } from "../../helpers/Constants"

const DevelopersList = () => {
  const { i18n } = useTranslation()
  const queryDevelopers = DEVELOPERS_LANGUAGE_QUERY[i18n.language]
  const developers = useDevelopersMetadata()[queryDevelopers].nodes

  return (
    <>
      {developers.map(developer => (<Developer key={developer.id} content={developer} />))}
    </>
  )
}

export default DevelopersList
