import React from "react"
import { useTranslation } from "react-i18next"

import IconReset from "../../../images/svg/icon-reset-filter.inline.svg"
import IconSearch from "../../../images/svg/icon-search.inline.svg"

const SearchField = () => {
  const { t } = useTranslation("contact")
  return (
    <form role="search">
      <label className={filterStyles.filterLabel + ' filterLabel'} htmlFor="filterInput">{t("peerSupporters:filterPlaceholder")} </label>
      <input
        tabIndex="0"
        id="filterInput"
        type="search"
        name="FilterSupporters"
        placeholder={t("peerSupporters:filterPlaceholder")}
        onChange={handleInputFilter}
        onFocus={handleInputLabelStatusFocus}
        onBlur={handleInputLabelStatusBlur}
      />
      <button
        className={filterStyles.filterReset + ' filterReset hide'}
        aria-label="Clear keyword input field"
        type="reset"
        value="reset"
        tabIndex="0"
        onClick={handleInputFilterReset}
      >
        <IconReset aria-hidden="true" />
      </button>
      <IconSearch className={filterStyles.filterSearchIcon + ' filterSearchIcon'} aria-hidden="true" />
    </form>
  )
}
export default SearchField