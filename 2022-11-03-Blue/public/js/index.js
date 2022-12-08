//클래스 이름 user인 값 호출
const headeruserNameElement = document.querySelector('.user');

//userName 이라고 선언된 값을 localuserName에 넣음
const localuserName = localStorage.getItem('userName');

//아이디 이름이 name인 값 호출
const userNameElement = document.querySelector('#name');

//입력받은 값으로 바꿔주는 setUserNameInnerHtml 함수 선언.
const setUserNameInnerHtml = (name) => {
  headeruserNameElement.innerHTML = `${name}<span>님</span>`;
  userNameElement.textContent = name;
};
//null 값이면 원래 값 입력.
if (localuserName) {
  setUserNameInnerHtml(localuserName);
}

//userNameElement를 누르면 이름입력창이 뜨고 그 이름을 userName값에 저장
userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  localStorage.setItem('userName', userName); // 새로고침을 해도 값이 유지됨

  setUserNameInnerHtml(userName);
};
