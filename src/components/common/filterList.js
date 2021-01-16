import React from "react"
import { useTranslation } from "react-i18next"

import filterStyles from '../common/filterList.module.scss'
import IconReset from "../../images/svg/icon-clear.inline.svg"
import IconSearch from "../../images/svg/icon-search.inline.svg"

const FilterList = ({ handleInputFilter, handleInputStatusBlur, handleInputFilterReset, searchIcon }) => {
    const { t } = useTranslation("peerSupporters")

    return (
        <div className={filterStyles.filterInput} >
            <form role="search">
                <label className={filterStyles.filterLabel + ' filterLabel'} htmlFor="filterInput">{t("common:inputSearch")} </label>
                <input
                    tabIndex="0"
                    id="filterInput"
                    type="search"
                    name="filterInput"
                    placeholder={t("common:inputSearch")}
                    onChange={handleInputFilter}
                    onBlur={handleInputStatusBlur}
                />
                <button
                    className={filterStyles.filterReset + ' filterReset hide'}
                    aria-label="Clear keyword input field"
                    type="reset"
                    value="reset"
                    tabIndex="0"
                    onClick={handleInputFilterReset}
                >
                    {!searchIcon ? <IconSearch aria-hidden="true" /> : <IconReset aria-hidden="true" />}
                </button>
            </form>
        </div>
    )
}

export default FilterList