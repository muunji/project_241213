//사용자 시간 가져오기
const userDate = new Date();
console.log(userDate);
console.log(userDate.toString());

//타임존 시간계산

//시간 간격 : 1년 (예약), 1일 (안내문자), 1시간 (알림)
const min = 60*1000;
const duration = {hour : 60*min, day: 60*24*min, yaer: 365*60*24*min};

//출력 형식 지정 yyyy-mm-dd HH-mm
function formatDate(userDate) {
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

console.log(formatDate(userDate));

//운영 시간 
const businessHours = {start : {time: "09:00", day:"monday"}, end : {time: "18:00", day:"friday"}}
//휴일
const holiday = ["01-01","01-28","01-29","01-30","03-03","05-05","06-06","08-15","10-03","12-25"];

//사용자 시간 -> 표준 시간(형식화된)으로 출력

//예약 가능 시간대 출력
//특정 날짜가 휴일인지 확인
function isHoliday(date, holiday) {
  const month = ("0"+(date.getMonth()+1)).slice(-2);
  const day = ("0"+date.getDate()).slice(-2);
  const formattedDate = month +"-"+day;
  //휴일 배열에 포함되어 있는지 확인인
  return holiday.includes(formattedDate);
}
//날짜가 운영 시간 범위에 있는지 확인
function isBusinessHours(date,businessHours) {
  //요일 이름 (영문) 추출
  const dayWeek =  date.toLocaleString("en-US",{weekday:"long"}).toLowerCase();
  //HH:mm형식
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTime = `${('0'+hours).slice(-2)}:${('0'+minutes).slice(-2)}`;

  //요일 검사
  const startDay = businessHours.start.day.toLowerCase();
  const endDay = businessHours.end.day.toLowerCase();
  const dayRange=(dayWeek === startDay || dayWeek ===endDay || (dayWeek > startDay&& dayWeek<endDay));

  //시간 검사
  const timeRange = currentTime >= businessHours.start.time && currentTime <=businessHours.end.time;

  //모두 맞으면 true
  return dayRange && timeRange
}

//예약 가능 시간대 생성
function availableTime(baseDate, slotCount,businessHours, holiday) {
  const slots =[];
  let currentSlot = new Date(baseDate);

  //휴일 및 운영시간 검사사
  while (slots.length < slotCount) {
    if(!isHoliday(currentSlot,holiday) && isBusinessHours(currentSlot,businessHours)) {
      slots.push(formatDate(currentSlot));
    }

    //1시간 증가
    currentSlot.setHours(currentSlot.getHours() + 1);
  }

  return slots;
}
//실행 예시
const baseDate = new Date("2024-12-17T10:00:00");
const slotCount = 5;
const availableSlots = availableTime(baseDate,slotCount,businessHours,holiday);
console.log("예약가능한 시간대:",availableSlots);

//예시) 예약한 날짜, 해당 병원 이용자 수
const reserveDay = new Date('2025/02/06 10:00:00');
const userNum = 5;
console.log(reserveDay);

//예약한 날짜에 대해 대기시간 출력
//한사람당 걸리는 시간이 5분이라는 가정하에
//if 사용자 시간 === 예약시간, 대기시간 = 이용자수 x 5분
//if 사용자 시간 < 예약시간, 대기시간 = 예약시간 - 사용자시간
function waitTime() {
  let time = '';
  let perMin = 5;
  const calc = reserveDay.getTime() - userDate.getTime();

  if(calc === 0 && userNum>0) {
    time = userNum * perMin;
    console.log(time+"일")
  } else if (calc >0) {
    time = calc / (60*60*1000);
    time_min= calc / (60*1000);
    console.log(Math.trunc(time)+"시간");
    console.log(Math.trunc(time_min)+"분");
  }
}
waitTime();