let homeScore = 0;
let guestScore = 0;

function setupBtns() {
    const home1 = document.getElementById('h1');
    const home2 = document.getElementById('h2');
    const home3 = document.getElementById('h3');
    const guest1 = document.getElementById('g1');
    const guest2 = document.getElementById('g2');
    const guest3 = document.getElementById('g3');
    const ngBtn = document.getElementById('newGame');
    home1.addEventListener("click", addh1);
    home2.addEventListener("click", addh2);
    home3.addEventListener("click", addh3);
    guest1.addEventListener("click", addg1);
    guest2.addEventListener("click", addg2);
    guest3.addEventListener("click", addg3);
    ngBtn.addEventListener("click", newGame);
}
setupBtns();

function addh1(event) {
    event.preventDefault();
    homeScore += 1;
    updateHome();
}
function addh2(event) {
    event.preventDefault();
    homeScore += 2;
    updateHome();
}
function addh3(event) {
    event.preventDefault();
    homeScore += 3;
    updateHome();
}
function updateHome() {
    const hScoreEl = document.getElementById('hScore');
    hScoreEl.textContent = homeScore;
    highlightLeader();
}

function addg1(event) {
    event.preventDefault();
    guestScore += 1;
    updateGuest();
}
function addg2(event) {
    event.preventDefault();
    guestScore += 2;
    updateGuest();
}
function addg3(event) {
    event.preventDefault();
    guestScore += 3;
    updateGuest();
}
function updateGuest() {
    const gScoreEl = document.getElementById('gScore');
    gScoreEl.textContent = guestScore;
    highlightLeader();
}

function highlightLeader() {
    const hScoreLblEl = document.getElementById('hScoreLabel');
    const gScoreLblEl = document.getElementById('gScoreLabel');
    if(homeScore==guestScore) {
        hScoreLblEl.classList.remove('leader');
        gScoreLblEl.classList.remove('leader');
        return;
    }
    if(homeScore>guestScore) {
        hScoreLblEl.classList.add('leader');
        gScoreLblEl.classList.remove('leader');
    } else {
        gScoreLblEl.classList.add('leader');
        hScoreLblEl.classList.remove('leader');

    }
};

function newGame(event) {
    event.preventDefault();
    homeScore = 0;
    guestScore = 0;
    updateHome();
    updateGuest();
}