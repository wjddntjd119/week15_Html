const now = prompt('현재 연도를 입력하세요.(YYYY)');
document.write(now + '년 현재연도 입니다.');

const birthDate = prompt('태어난 연도를 입력하세요.(YYYY)');
const age = parseInt(now) - parseInt(birthDate);
document.write(birthDate +"에 태어난 사람의 나이는 현재 "+ age +"입니다.");
