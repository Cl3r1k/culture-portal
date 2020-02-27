import React from 'react'
import { useTranslation } from 'react-i18next'
import List from '../List/List'

const Difficulties = () => {
  const { t } = useTranslation()
  const difficultiesList = Array(t('difficulties-list.length'))
  .fill(0)
  .map((el, i) => t(`difficulties-list.${i}`))

  return (
    <div>
      <h3 className="base-title_md">{t('difficulties')}</h3>
      <List data={difficultiesList} isOrderedList />
    </div>
  )
}

export default Difficulties
