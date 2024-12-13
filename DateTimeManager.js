//사용자 시간 가져오기
const userDate = new Date();
console.log(userDate);
console.log(userDate.toString());

//타임존 시간계산
//시간 간격 : 1년 (예약), 1일 (안내문자), 1시간 (알림)
// const duration = {year:}

//출력 형식 지정 yyyy-mm-dd HH-mm

//운영 시간 
//휴일

//사용자 시간 -> 표준 시간(형식화된)으로 출력
//예약 가능 시간대 출력

//예약한 날짜, 해당 병원 이용자 수

//예약한 날짜에 대해 대기시간 출력
//if 사용자 시간 === 예약시간, 대기시간 = 이용자수 x 5분
//if 사용자 시간 < 예약시간, 대기시간 = 예약시간 - 사용자시간 + 이용자수 X 5분