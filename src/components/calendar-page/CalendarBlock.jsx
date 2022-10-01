import React from "react";

const CalendarBlock = ({date, isCurrentMonth, activeDate, setDate, hasTask = false}) => {
    const day = new Date(date).getDate();
    return(
        <div className={`calendar ${date === activeDate ? "active" : ""} ${!isCurrentMonth ? "disabled" : ""}`} onClick={() => setDate(date)}>
            {day}
            {hasTask ? <div className="dot"></div> : ""}
        </div>
    )
}

export default CalendarBlock;