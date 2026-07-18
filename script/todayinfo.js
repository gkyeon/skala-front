// 오늘 날짜와 요일을 화면에 표시
const today = new Date();
const days = ["일", "월", "화", "수", "목", "금", "토"];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const dayName = days[today.getDay()];

const todayInfo = document.querySelector('#today-info');
todayInfo.textContent = `오늘은 ${year}년 ${month}월 ${date}일 ${dayName}요일입니다.`;