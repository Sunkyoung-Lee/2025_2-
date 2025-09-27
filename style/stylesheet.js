

/* 상단 스크롤 버튼 */
const $topBtn = document.querySelector(".moveTopBtn");

// 버튼 클릭 시 맨 위로 이동
$topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });  
}


// 공통 옵저버 옵션
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -10% 0px"
};


/* HOME */
window.addEventListener('load', () => { // ✅ 이 코드를 사용
  const designWord = document.querySelector('.word-design');
  const portfolioWord = document.querySelector('.word-portfolio');
  const mainContainer = document.querySelector('.main-container');
  const dot = document.querySelector('.dot');

  // 'Design' 텍스트 나타나기
  setTimeout(() => {
    designWord.style.transition = 'opacity 1s ease-out';
    designWord.style.opacity = '1';
  }, 500);

  // 'Portfolio' 텍스트 나타나기
  setTimeout(() => {
    portfolioWord.style.transition = 'opacity 1s ease-out';
    portfolioWord.style.opacity = '1';
  }, 1500);

  // 모든 텍스트가 나타난 후(총 2.5초 후) 배경색과 점 색상 변경 애니메이션 실행
  setTimeout(() => {
    mainContainer.classList.add('animate-bg');
    dot.classList.add('animate-dot');
  }, 2500);
});




// 헤더 스크롤 트리거
const header = document.getElementById('site-header');
const card = document.getElementById('flip-card');
const THRESHOLD = 48;

function onScroll(){
  if(window.scrollY > THRESHOLD){
    header.classList.add('scrolled');
    card.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    card.classList.remove('scrolled');
  }
}
window.addEventListener("scroll", onScroll);



/*About Me*/
const slideTexts = document.querySelectorAll(".slide-text");
const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

slideTexts.forEach(text => slideObserver.observe(text));


/* WORK-CONTENT anim */
const elementsToAnimate = document.querySelectorAll('.work-content[data-aos="slide-in-left"]');

const workobserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // entry.isIntersecting이 true이면, 요소가 뷰포트에 보임
    if (entry.isIntersecting) {
      // 해당 요소에 애니메이션 클래스 'animate-in'을 추가
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
},{ threshold: 0.5 });

elementsToAnimate.forEach(element => {
  workobserver.observe(element);
});


/* WORKCARD */
window.addEventListener('load', () => {
  const cards = document.querySelectorAll(".workcard");

  cards.forEach(card => {
    const button = card.querySelector(".workcard-button");

    button.addEventListener("click", () => {
      // 다른 모든 카드를 닫기
      cards.forEach(c => {
        if (c !== card) {
          c.classList.remove("active");
        }
      });

      // 클릭한 카드의 active 클래스 토글 (추가/제거)
      card.classList.toggle("active");
    });
  });
});



/* WORKCARD 계단식 anim */
window.addEventListener('load', () => {
  const elements = document.querySelectorAll('.workcard');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  elements.forEach(el => observer.observe(el));
});






// Project 카드 애니메이션
const projectcards = document.querySelectorAll(".projectcard");
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if(entry.isIntersecting){
      setTimeout(() => {
        entry.target.classList.add("show");
      }, i * 200);
    }
  });
}, observerOptions);

projectcards.forEach(card => projectObserver.observe(card));

/* contact anim */
window.addEventListener('load', () => {
  const target = document.querySelector(".contact-wrap");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 타겟 요소가 화면에 보일 때
        const children = entry.target.querySelectorAll('.contact-info, .contact-arrow, .contact-list');
        
        children.forEach(child => {
          child.classList.add('show');
        });
        
        // 애니메이션이 한 번만 실행되도록 관찰 중단
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // 화면에 50% 이상 보일 때 실행

  observer.observe(target);
});

/* contact word anim */
window.addEventListener('load', () => {
  const targetElement = document.querySelector(".word");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(targetElement);
});