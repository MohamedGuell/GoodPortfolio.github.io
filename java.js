const cardElements = document.querySelectorAll(".card");

for (const cardElement of cardElements) {
  const firstChild = cardElement.children[0];

  firstChild.addEventListener("mousemove", e => {
    let elRect = firstChild.getBoundingClientRect();
    let x = e.clientX - elRect.x;
    let y = e.clientY - elRect.y;
    let LargeurMoy = elRect.width / 2;
    let HauteurMoy = elRect.height / 2;
    let angleX = (y - HauteurMoy) / 12;
    let angleY = -(x - LargeurMoy) / 12;
    firstChild.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  });

  firstChild.addEventListener("mouseleave", () => {
    firstChild.style.transform = "rotateX(0) rotateY(0)";
  });
}

for (const cardElement of cardElements) {
    const secondChild = cardElement.children[1];
  
    secondChild.addEventListener("mousemove", e => {
      let elRect = secondChild.getBoundingClientRect();
      let x = e.clientX - elRect.x;
      let y = e.clientY - elRect.y;
      let LargeurMoy = elRect.width / 2;
      let HauteurMoy = elRect.height / 2;
      let angleX = (y - HauteurMoy) / 12;
      let angleY = -(x - LargeurMoy) / 12;
      secondChild.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    });
  
    secondChild.addEventListener("mouseleave", () => {
      secondChild.style.transform = "rotateX(0) rotateY(0)";
    });
  }
/*
  for (const cardElement of cardElements) {
    const thirdChild = cardElement.children[2];
  
    thirdChild.addEventListener("mousemove", e => {
      let elRect = thirdChild.getBoundingClientRect();
      let x = e.clientX - elRect.x;
      let y = e.clientY - elRect.y;
      let LargeurMoy = elRect.width / 2;
      let HauteurMoy = elRect.height / 2;
      let angleX = (y - HauteurMoy) / 12;
      let angleY = -(x - LargeurMoy) / 12;
      thirdChild.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    });
  
    thirdChild.addEventListener("mouseleave", () => {
      thirdChild.style.transform = "rotateX(0) rotateY(0)";
    });
  } */