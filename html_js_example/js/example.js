const imgElement = document.querySelector('img');

const buttonElement = document.querySelector('button');

const h1Element = document.querySelector('h1');

//이미지 파일 주소 같아야됨
const onClickLister = (a, event) =>{
  const nowSrc = imgElement.getAttribute('src');
  if (nowSrc === './image/1.jpg') {
    imgElement.setAttribute('src', './image/2.jpg');
  } else {
    imgElement.setAttribute('src', './image/1.jpg');
  }
};

const onClickButton = () =>{
  const userName = prompt('이름을 입력해주세요');
  h1Element.innerText = userName;
};

buttonElement.onclick = onClickButton;

imgElement.onclick = onClickLister;
