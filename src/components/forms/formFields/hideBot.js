import React from "react"


const hideBot = () => {
  return (
    <label className="hideBot">
      Don’t fill this field if you’re human
      <input name="bot-field" />
    </label>
  )
}
export default hideBot