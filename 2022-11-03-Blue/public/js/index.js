//다른 파일에서 특정 클래스명 불러오기

const headerUserNameElement = document.querySelector('.user');

const userNameElement = document.querySelector('.user-name');

const localUserName = localStorage.getItem('userName');

const setUserNameInnerHTML = (name) => {
  headerUserNameElement.innerHTML = `${name} <span>님</span>`;
  userNameElement.innerHTML = `${name} <span>님</span>`;
};

if (localUserName) {
  setUserNameInnerHTML(localUserName);
}

userNameElement.onclick = () =>{
  const userName = prompt('이름을 입력해주세요');
  //username에 대한 유효성 검사 잇으면 좋다

  localStorage.setItem('userName', userName);

  setUserNameInnerHTML(userName);
};