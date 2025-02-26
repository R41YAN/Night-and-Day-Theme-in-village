function toggleDayNight() {
    const body = document.body;
    const sun = document.getElementById('sun');
    const house = document.getElementById('house');
    const car = document.getElementById('car');
    const river = document.getElementById('river');

    if (body.classList.contains('day-theme')) {
        // Switch to Night
        body.classList.remove('day-theme');
        body.classList.add('night-theme');
        
        sun.src = 'images/moon-on.gif';
        house.src = 'images/close door.png';
        car.src = 'images/car off.png';
        river.src = 'images/flowing river.gif';
    } else {
        // Switch to Day
        body.classList.remove('night-theme');
        body.classList.add('day-theme');
        
        sun.src = 'images/sun-on.gif';
        house.src = 'images/open door.gif';
        car.src = 'images/car on.gif';
        river.src = 'images/flowing river.gif';
    }
}
