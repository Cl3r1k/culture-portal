import React from 'react'
import { useTranslation } from 'react-i18next'
import List from '../List/List'

const SelfEvaluation = () => {
  const { t } = useTranslation()
  const translatedListMinScope = Array(t('min-scope-data.length'))
  .fill(0)
  .map((el, i) => t(`min-scope-data.${i}`))
  const translatedListNormalScope = Array(t('normal-scope-data.length'))
  .fill(0)
  .map((el, i) => t(`normal-scope-data.${i}`))
  const translatedListExtraScope = Array(t('extra-scope-data.length'))
  .fill(0)
  .map((el, i) => t(`extra-scope-data.${i}`))

  return (
    <>
      <h3 className="base-title_md">{t('self-evaluation')}</h3>

      <div className="box-with-bg">

        <h4>{t('max-points')}</h4>

        <h4>{t('min-scope')}</h4>

        <List data={translatedListMinScope} />

        <h4>{t('normal-scope')}</h4>
        <List data={translatedListNormalScope} />

        <h4>{t('extra-scope')}</h4>
        <List data={translatedListExtraScope} />
      </div>
    </>
  )
}

export default SelfEvaluation
