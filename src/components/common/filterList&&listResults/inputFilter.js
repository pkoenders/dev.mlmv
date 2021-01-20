import React from "react"
import { useTranslation } from "react-i18next"

import inputFilter from './inputFilter.module.scss'

const FilterList = ({ handleInputFilter, handleInputFilterReset, searchIcon }) => {
    const { t } = useTranslation("peerSupporters")

    return (
        <div className={inputFilter.wrapper} >
            <form role="search">
                <label className={inputFilter.filterLabel + ' filterLabel'} htmlFor="filterInput">{t("common:inputSearch")} </label>
                <input
                    tabIndex="0"
                    id="filterInput"
                    type="search"
                    name="filterInput"
                    placeholder={t("common:inputSearch")}
                    onChange={handleInputFilter}
                />
                <button
                    className={inputFilter.filterReset + ' filterReset hide'}
                    aria-label="Clear keyword input field"
                    type="reset"
                    value="reset"
                    tabIndex="0"
                    onClick={handleInputFilterReset}
                >
                    {!searchIcon ? <i className={"material-icons"} aria-hidden="true">search</i> : <i className={"material-icons"} aria-hidden="true">clear</i>}
                </button>
            </form>
        </div>
    )
}

export default FilterList