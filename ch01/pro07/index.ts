let 제목1 = document.querySelector('#title');
if (제목1 != null) 제목1.innerHTML = '반가워요1';
if (제목1 instanceof Element) 제목1.innerHTML = '반가워요2';
if (제목1?.innerHTML) 제목1.innerHTML = '반가워요3';

let 제목2 = document.querySelector('#title') as Element;
제목2.innerHTML = '반가워요3';

let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) 링크.href = 'https://kakao.com';

let 버튼 = document.querySelector('.button');
버튼?.addEventListener('click', function () {});
