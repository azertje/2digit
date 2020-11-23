const content1 = [
    {
        title: '남들 다 아는 뉴스,<br>나만 아는 정보',
        text: '호재 같은 악재 뉴스? 악재 같은 호재 뉴스?<br>국내 최초의 인공지능 기반 뉴스 분석 주식정보 서비스로<br>진실을 확인하세요!',
        image: 'images/1-1.png'
    },
    {
        title: '인공지능을 통한<br>실시간 종합 분석',
        text: '요리조리 비교하고 12가지 지표로 분석하며 평가하는 <br>스마트 분석으로 어려운 차트 보기 해결하세요!',
        image: 'images/1-2.png'
    },
    {
        title: '시장과 종목의<br>이벤트를 한 눈에',
        text: '주주총회를 하는 종목은 뭘까? <br>주주총회하면 주가는 오를까? 내릴까?<br>이벤트 알림 받고 투자 시점 꽉 잡으세요!',
        image: 'images/1-3.png'
    }
];

const content2 = [
    {
        title: '고평가? 저평가?<br>내 종목 가치에 대한 전망은?',
        text: '내 종목의 미래는?<br>FICS 산업 분류로 비교, 평가된<br>보유 종목의 가치를 한 눈에 확인하세요.',
        image: 'images/2-1.gif'
    },
    {
        title: '이 방 저 방 이제 그만!<br>주주들의 의견을 모아모아',
        text: '종목 토론방 게시물을 인공지능이<br>실시간 모니터링을 통해 감성 분석을 수행하여 <br>상장 종목에 대한 의견이 긍정적인지 부정적인지를 판별합니다.',
        image: 'images/2-2.png'
    },
    {
        title: '급등주, 테마주 등 원하는 종목을<br>찾아주는 스마트 맞춤 검색',
        text: 'HOT한 주식만 골라서 쏙쏙!<br>매일 업데이트 되는 테마주, 급등주를 하나도 놓치지 않는<br>세분화된 검색 기능을 제공합니다',
        image: 'images/2-3.png'
    },
];

const content1Buttons = document.querySelectorAll('#content1 .btn-box button');
const content1Title = document.querySelector('#content1 .tab-title');
const content1Text = document.querySelector('#content1 .tab-text');
const content1Image = document.querySelector('#content1 .content-right img');

const content2Buttons = document.querySelectorAll('#content2 .btn-box button');
const content2Title = document.querySelector('#content2 .tab-title');
const content2Text = document.querySelector('#content2 .tab-text');
const content2Image = document.querySelector('#content2 .content-right img');

content1Buttons.forEach((button, key) => {
    button.addEventListener('click', (e) => {
        content1Buttons.forEach(b => b.className = '');
        e.currentTarget.className = 'active';

        content1Title.innerHTML = content1[key].title;
        content1Text.innerHTML = content1[key].text;
        content1Image.src = content1[key].image;
    });
});

content2Buttons.forEach((button, key) => {
    button.addEventListener('click', (e) => {
        content2Buttons.forEach(b => b.className = '');
        e.currentTarget.className = 'active';

        content2Title.innerHTML = content2[key].title;
        content2Text.innerHTML = content2[key].text;
        content2Image.src = content2[key].image;
    });
});