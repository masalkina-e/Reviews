let reviews = [
  {
    avatar: "picture/Susan_Smith.png",
    name: "Susan Smith",
    prof: "WEB DEVELOPER",
    text: "I am baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    avatar: "picture/Anna_Johnson.png",
    name: "Anna Johnson",
    prof: "WEB DESIGNER",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal",
  },
  {
    avatar: "picture/Peter_Jones.png",
    name: "Peter Jones",
    prof: "INTERN",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag",
  },
  {
    avatar: "picture/Bill_Anderson.png",
    name: "Bill Anderson",
    prof: "THE BOSS",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic",
  },
];

const container = document.getElementById("reviews-container");
container.innerHTML = "";

let currentIndex = 0;

function renderReview() {
  const review = reviews[currentIndex];

  container.innerHTML = `

    <img src="${review.avatar}" alt="Avatar" class="avatar"/img>
    <p class="name">${review.name}</p>
    <p class="prof">${review.prof}</p>
    <p class="text">${review.text}</p>

    `;
}

function nextReview() {
  currentIndex = currentIndex + 1;

  if (currentIndex > 3) {
    currentIndex = 0;
  }
  renderReview();
  console.log(currentIndex);
}

const clickNextReview = document.getElementById("btn-next");
clickNextReview.addEventListener("click", nextReview);

function backReview() {
  currentIndex = currentIndex - 1;

  if (currentIndex < 0) {
    currentIndex = 3;
  }

  renderReview();
  console.log(currentIndex);
}

const clickBackReview = document.getElementById("btn-prev");
clickBackReview.addEventListener("click", backReview);

renderReview();
