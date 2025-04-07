const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "🦦라이트모드";
  } else {
    toggleBtn.textContent = "🦉 다크모드";
  }
});

const greetingText = document.getElementById("greetingText");
const helloBtn = document.getElementById("helloBtn");

helloBtn.addEventListener("click", () => {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "좋은 아침~!";
  } else if (hour >= 12 && hour < 18) {
    greeting = "오후도 파이팅!";
  } else {
    greeting = "오늘도 수고했어:>";
  }
  greetingText.textContent = greeting;
  helloBtn.classList.add("bounce");
  setTimeout(() => {
    helloBtn.classList.remove("bounce");
  }, 400); // 애니메이션 시간과 동일
});

const musics = [
  "모스부호 - 드래곤포니",
  "나쁜 영원 - 윤마치",
  "찬란 - 나상현씨밴드",
  "미안해 널 미워해 - 식케이",
  "졸업 - 달담",
  "도킹 - 이승윤",
  "Not Out - 드래곤포니",
  "행운을 빌어요 - 페퍼톤스",
];

const musicBtn = document.getElementById("musicBtn");
const musicText = document.getElementById("musicText");

musicBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * musics.length);
  musicText.textContent = musics[randomIndex];

  //버튼 문구 한 번만 바꿔주기
  if (musicBtn.textContent !== "🎶 또 추천받기") {
    musicBtn.textContent = "🎶 또 추천받기";
  }
  //버튼 애니메이션
  musicBtn.classList.add("bounce");
  setTimeout(() => musicBtn.classList.remove("bounce"), 400);
});
