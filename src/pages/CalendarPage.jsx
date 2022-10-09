import React, { useState } from "react";
import { useEffect } from "react";

import Icon from "../components/base/Icon";
import CalendarBlock from "../components/calendar-page/CalendarBlock";

const CalendarPage = ({todos}) =>{
    const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const options = { weekday:'short',day:'numeric', month:'short', year:'numeric' };

    const date = new Date();
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth());
    const [activeDate, setDate] = useState(`${year}-${Math.floor((month + 1)/10)}${(month + 1)%10}-${Math.floor(date.getDate()/10)}${date.getDate()%10}`);

    const nextMonth = () => {
        setMonth(month + 1);
    }
    const previousMonth = () => {
        setMonth(month - 1);
    }

    const showCalendar = () => {
        const dateList = [[],[],[]];
        const prevMonth = month === 0 ? 11 : month - 1;
        const nextMonth = (month + 1) % 12;
        const febDay = year % 4 ? 29 : 28;
        const monthDays = [31, febDay, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const firstDay = new Date(year,month).getDay();
        const nextDays = 7 - ((firstDay + monthDays[month]) % 7);

        for(let i = 0; i < firstDay; i++){
            dateList[0].push(`${year}-${Math.floor((prevMonth + 1)/10)}${(prevMonth + 1)%10}-${Math.floor((monthDays[prevMonth] - firstDay + i + 1)/10)}${(monthDays[prevMonth] - firstDay + i + 1)%10}`);
        }
        for(let i = 0; i < monthDays[month]; i++){
            dateList[1].push(`${year}-${Math.floor((month + 1)/10)}${(month + 1)%10}-${Math.floor((i + 1)/10)}${(i + 1)%10}`);
        }
        for(let i = 0; i < nextDays ; i++){
            dateList[2].push(`${year}-${Math.floor((nextMonth + 1)/10)}${(nextMonth + 1)%10}-${Math.floor((i + 1)/10)}${(i + 1)%10}`);
        }

        return dateList;
    }
    useEffect(() =>{
        if(month === 12){
            setYear(year + 1);
            setMonth(0);
        }else if(month === -1){
            setYear(year - 1);
            setMonth(11)
        }
    },[month]);
    return(
        <section id="calendar-page">
            <div className="container">
                <div className="calendar-pagination">
                    <div className="arrow-btn prev-btn" onClick={() => previousMonth()}><Icon type={'arrow'}/></div>
                    <div className="calendar-title">{monthList[month]} {year}</div>
                    <div className="arrow-btn next-btn" onClick={() => nextMonth()}><Icon type={'arrow'}/></div>
                </div>
                <div className="page-content">
                    <div className="calendar-wrapper">
                        {weekDays.map((day) => <div className="weekdays">{day}</div>)}
                        {showCalendar().map((month, index) => 
                            month.map((date) => <CalendarBlock isCurrentMonth={(index === 1)} date={date} activeDate={activeDate} setDate={setDate} hasTask={todos ? (todos.filter(todo => todo.due_date.split('T')[0] === date).length > 0) : null}/>
                            ))}
                    </div>
                    <div className="task-wrapper">
                        <div className="task-header">
                            <div className="task-title">Available Tasks</div>
                            <div className="date">{new Date(activeDate).toLocaleDateString('en-GB', options)}</div>
                        </div>
                        <ol className="task-content">
                            {todos ? todos.filter(todo => todo.due_date.split('T')[0] === activeDate).map((todo) => <li className={todo.completed ? "strike-through" : ""}>{todo.title}</li>) : ""}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CalendarPage;