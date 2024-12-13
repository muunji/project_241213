//사용자 시간 가져오기
const userDate = new Date();
console.log(userDate);
console.log(userDate.toString());

//타임존 시간계산

//시간 간격 : 1년 (예약), 1일 (안내문자), 1시간 (알림)
const min = 60*1000;
const duration = {hour : 60*min, day: 60*24*min, yaer: 365*60*24*min};

//출력 형식 지정 yyyy-mm-dd HH-mm
function formatDate() {
  const year = userDate.getFullYear(); //2024
  const month = (userDate.getMonth()+1).toString();//12
  const day = userDate.getDate().toString()//13

  const dateString = year + '-' +month+'-'+day;

  const hour = userDate.getHours();
  const minute = userDate.getMinutes();

  const timeString = hour +":"+minute;

  const result = dateString + " " +timeString

  return result;
}

console.log(formatDate());

//운영 시간 
const businessHours = {start : {time: "09:00", day:"monday"}, end : {time: "18:00", day:"friday"}}
//휴일
const holiday = ["01-01","01-28","01-29","01-30","03-03","05-05","06-06","08-15","10-03","12-25"];

//사용자 시간 -> 표준 시간(형식화된)으로 출력
//예약 가능 시간대 출력

//예약한 날짜, 해당 병원 이용자 수
const reserveDay = new Date('');
const userNum = 5;

//예약한 날짜에 대해 대기시간 출력
//if 사용자 시간 === 예약시간, 대기시간 = 이용자수 x 5분
//if 사용자 시간 < 예약시간, 대기시간 = 예약시간 - 사용자시간 + 이용자수 X 5분