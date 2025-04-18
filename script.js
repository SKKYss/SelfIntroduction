//图片轮播1
let oMain = document.querySelector("#main");
let aImg = document.querySelector("#main div");
let speed1 = -2;
oMain.innerHTML += oMain.innerHTML;
let move = () => {
  if (oMain.offsetLeft < -oMain.offsetWidth / 2) {
    oMain.style.left = "0";
  }
  if (oMain.offsetLeft > 0) {
    oMain.style.left -= oMain.offsetLeft / 2 + "px";
  }
  oMain.style.left = oMain.offsetLeft + speed1 + "px";
};
let timer = setInterval(move, 30);

//图片轮播2
let oMain2 = document.querySelector("#main2");
let oMask = document.querySelector("#mask");
let aImg2 = document.querySelectorAll("#main2 div");
let aButton = document.querySelectorAll("span");
let speed2 = -5;
oMain2.innerHTML += oMain2.innerHTML;
let move2 = () => {
  if (oMain2.offsetLeft < -oMain2.offsetWidth / 2) {
    oMain2.style.left = "0";
  }
  if (oMain2.offsetLeft > 0) {
    oMain2.style.left = -oMain2.offsetWidth / 2 + "px";
  }
  oMain2.style.left = oMain2.offsetLeft + speed2 + "px";
};
let timer2 = setInterval(move2, 30);
oMask.addEventListener("mouseover", () => {
  clearInterval(timer2);
});
oMask.addEventListener("mouseout", () => {
  timer2 = setInterval(move2, 30);
});
aButton[0].onclick = () => {
  speed2 = -5;
};
aButton[1].onclick = () => {
  speed2 = 5;
};
// 处理滚动事件
let lastScrollTop = 0; // 记录上一次滚动的位置
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (scrollTop > lastScrollTop) {
        // 向下滚动
        section.classList.add("visible-down");
        section.classList.remove("visible-up");
      } else {
        // 向上滚动
        section.classList.add("visible-down");
        section.classList.remove("visible-up");
      }
    } else {
      section.classList.remove("visible-down", "visible-up");
    }
  });

  // 检测是否滑动到最后一页
  if (scrollTop + window.innerHeight >= document.body.offsetHeight) {
    const arrow = document.getElementById("right-arrow");
    arrow.style.display = "block"; // 显示箭头
    arrow.classList.remove("hidden"); // 移除隐藏类
  } else {
    document.getElementById("right-arrow").style.display = "none"; // 隐藏箭头
  }

  lastScrollTop = scrollTop; // 更新上一次滚动的位置
});

// 页面加载时显示所有 section
window.addEventListener("load", function () {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("visible-down");
  });
});
