// 다음 주말(토요일)까지 남은 일수 계산
const today = new Date();
const todayDay = today.getDay(); // 0(일) ~ 6(토)

// 토요일(6)까지 며칠 남았는지 계산
let daysUntilSaturday = 6 - todayDay;
if (daysUntilSaturday < 0) {
    daysUntilSaturday += 7;
}

const countdownBox = document.querySelector('#holiday-countdown');

if (daysUntilSaturday === 0) {
    countdownBox.innerHTML = "<b>🎉 오늘이 바로 휴일입니다! 신나게 즐기세요!</b>";
} else {
    countdownBox.innerHTML = `<b>⏳ 휴일까지 ${daysUntilSaturday}일 남았습니다!</b>`;
}