import './calendar.css'
import * as datefns from 'date-fns'

const Calendar = () => {

    const today = new Date;
    let startOfMonth = datefns.startOfMonth(today);
    const dayOfWeek = datefns.getDay(startOfMonth);
    const weekNumber = datefns.getWeekOfMonth(startOfMonth);
    let gridNumber = (weekNumber-1)*7 + dayOfWeek+1;
    const array = new Array(42);
    let date = new Date;
    let dateString = "";

    const element = (() => {
        const calendarContainer = document.createElement('div');
        calendarContainer.classList.add('calendar-container');

        const calendarHeader = document.createElement('div');
        calendarHeader.classList.add('calendar-header');

        const leftArrow = document.createElement('span');
        leftArrow.classList.add('previous', 'fas', 'fa-chevron-left');
        leftArrow.id = 'previous-month';

        const headerText = document.createElement('p');
        headerText.id = 'month';

        const rightArrow = document.createElement('span');
        rightArrow.classList.add('next', 'fas', 'fa-chevron-right');
        rightArrow.id = 'next-month';

        calendarHeader.appendChild(leftArrow);
        calendarHeader.appendChild(headerText);
        calendarHeader.appendChild(rightArrow);
        calendarContainer.appendChild(calendarHeader);

        const calendarGrid = document.createElement('div');
        calendarGrid.classList.add('calendar-grid');

        const gridHeader = document.createElement('div');
        gridHeader.classList.add('grid-header');

        const sunday = document.createElement('p');
        sunday.textContent = 'Sun';
        const monday = document.createElement('p');
        monday.textContent = 'Mon';
        const tuesday = document.createElement('p');
        tuesday.textContent = 'Tue';
        const wednesday = document.createElement('p');
        wednesday.textContent = 'Wed';
        const thursday = document.createElement('p');
        thursday.textContent = 'Thu';
        const friday = document.createElement('p');
        friday.textContent = 'Fri';
        const saturday = document.createElement('p');
        saturday.textContent = 'Sat';

        gridHeader.appendChild(sunday);
        gridHeader.appendChild(monday);
        gridHeader.appendChild(tuesday);
        gridHeader.appendChild(wednesday);
        gridHeader.appendChild(thursday);
        gridHeader.appendChild(friday);
        gridHeader.appendChild(saturday);
        calendarGrid.appendChild(gridHeader);

        const gridBody = document.createElement('div');
        gridBody.classList.add('grid-body');
        gridBody.id = 'grid-body';

        for (let i = 1; i <= 42; i++) {
            const square = document.createElement('p');
            square.dataset.pos = `${i}`;
            square.classList.add('grid-cell');
            gridBody.appendChild(square);
            square.addEventListener('click', returnDate.bind(square));
        }

        calendarGrid.appendChild(gridBody);
        calendarContainer.appendChild(calendarGrid);

        rightArrow.addEventListener('click', loadNextMonth);
        leftArrow.addEventListener('click', loadPreviousMonth);
        headerText.addEventListener('click', goToToday);

        return calendarContainer
    })()

    function loadArray(){
        //Locate startOfMonth on the grid
        gridNumber = (datefns.getWeekOfMonth(startOfMonth)-1)*7 + datefns.getDay(startOfMonth)+1;
        array[gridNumber-1] = startOfMonth;
        //Initialize days before startOfMonth
        for (let i = gridNumber-2; i >= 0; i--) {
            array[i] = datefns.subDays(array[i+1],1);
        }
        //Initialize days after startOfMonth
        for (let i = gridNumber; i < array.length; i++) {
            array[i] = datefns.addDays(array[i-1],1);
        }
    }

    function populateGrid() {
        array.forEach(date => {
            if(datefns.getMonth(date) == datefns.getMonth(startOfMonth)) {
                let position = (datefns.getWeekOfMonth(date)-1)*7 + (datefns.getDay(date)+1);
                let grid = element.querySelector(`[data-pos="${position}"]`);
                grid.textContent = `${datefns.getDate(date)}`;
            } 
        })
    }

    function wipeGrid() {
        for (let i = 1; i <= 42; i++) {
            let grid = element.querySelector(`[data-pos="${i}"]`);
            grid.textContent = '';
        }
    }

    function setMonthName() {
        const month = datefns.getMonth(startOfMonth);
        const year = datefns.getYear(startOfMonth);
        let monthName = "";
        switch (month) {
            case 0:
                monthName = element.querySelector('#month');
                monthName.textContent = `Jan ${year}`;
                break;
            case 1:
                monthName = element.querySelector('#month');
                monthName.textContent = `Feb ${year}`;
                break;
            case 2:
                monthName = element.querySelector('#month');
                monthName.textContent = `Mar ${year}`;
                break;
            case 3:
                monthName = element.querySelector('#month');
                monthName.textContent = `Apr ${year}`;
                break;
            case 4:
                monthName = element.querySelector('#month');
                monthName.textContent = `May ${year}`;
                break;
            case 5:
                monthName = element.querySelector('#month');
                monthName.textContent = `Jun ${year}`;
                break;
            case 6:
                monthName = element.querySelector('#month');
                monthName.textContent = `Jul ${year}`;
                break;
            case 7:
                monthName = element.querySelector('#month');
                monthName.textContent = `Aug ${year}`;
                break;
            case 8:
                monthName = element.querySelector('#month');
                monthName.textContent = `Sep ${year}`;
                break;
            case 9:
                monthName = element.querySelector('#month');
                monthName.textContent = `Oct ${year}`;
                break;
            case 10:
                monthName = element.querySelector('#month');
                monthName.textContent = `Nov ${year}`;
                break;
            case 11:
                monthName = element.querySelector('#month');
                monthName.textContent = `Dic ${year}`;
                break;
            default:
                break;
        }
    }

    function loadNextMonth() {
        startOfMonth = datefns.addMonths(startOfMonth,1);
        loadArray();
        wipeGrid();
        setMonthName();
        populateGrid();
    }

    function loadPreviousMonth() {
        startOfMonth = datefns.subMonths(startOfMonth,1);
        loadArray();
        wipeGrid();
        setMonthName();
        populateGrid();
    }

    function returnDate() {
        const day = this.textContent;
        const month = element.querySelector('#month').textContent.split(' ')[0];
        const year = element.querySelector('#month').textContent.split(' ')[1];

        const monthToNumber = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'];

        let string = (`${month} ${day}, ${year}`);
        let object = new Date(year, monthToNumber.indexOf(month), day);

        element.parentNode.querySelector('#date-string').textContent = string;

        element.remove();

        setDate(string, object)

    }

    function setDate(string, object) {
        dateString = string;
        date = object;
        console.log(date, dateString);
    }

    function goToToday() {
        startOfMonth = datefns.startOfMonth(today);
        loadArray();
        wipeGrid();
        setMonthName();
        populateGrid();

        setDate(datefns.format(today, 'PP'), today);
    }

    function goToDate() {
        startOfMonth = datefns.startOfMonth(date);
        loadArray();
        wipeGrid();
        setMonthName();
        populateGrid();

        setDate(datefns.format(date, 'PP'), date);
    }

    function getDate() {
        return date
    }

    function getDateString() {
        return dateString
    }

    goToToday();
    loadArray();
    populateGrid();
    setMonthName();

    return {element, goToToday, goToDate, getDate, getDateString, setDate}
};

export {Calendar}