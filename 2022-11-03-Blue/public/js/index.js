//과제 부분
const studentNumberElement = document.querySelector('#studentNumber');


const localstudentNumber = localStorage.getItem('studentNumber');

const localemail = localStorage.getItem('studentemail');

const emailElement = document.querySelector('#email');

const setStudentNumberInnerHtml = (value) => {
  studentNumberElement.textContent = value;
};
const setStudentEmailInnerHtml = (value) => {
  emailElement.textContent = value;
};
var emailTest = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

//변경된 값 유지
if (localstudentNumber) {
  setStudentNumberInnerHtml(localstudentNumber);
}
if (localemail) {
  setStudentEmailInnerHtml(localemail);
}


studentNumberElement.onclick = () => {
  while(1) {
    const studentNumber = prompt('학번을 입력해주세요.');
    if (Number(studentNumber)) {
      localStorage.setItem('studentNumber', studentNumber);
      setStudentNumberInnerHtml(studentNumber);
      break;
    }else{
      alert("숫자를 입력해주세요");
      continue;
    }
  }
};

emailElement.onclick = () => {
  while(1) {
    const studentemail = prompt('학번을 입력해주세요.');
    if(emailTest.text(studentemail)) {
      localStorage.setItem('studentemail', studentemail);
      setStudentEmailInnerHtml(studentemail);
      break;
    }else{
      alert("이메일 형식을 지켜주세요.(아이디+@+주소)");
      continue;
    }
  }
};



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
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
//변경된값 유지
if (localuserName) {
  setUserNameInnerHtml(localuserName);
}

//userNameElement를 누르면 이름입력창이 뜨고 그 이름을 userName값에 저장
userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  localStorage.setItem('userName', userName); // 새로고침을 해도 값이 유지됨

  setUserNameInnerHtml(userName);
};

