let reviews = [
  {
    avatar: "images/Sean_Smith.png",
    name: "Sean Smith",
    prof: "WEB DEVELOPER",
    text: "I am baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    avatar: "images/Anna_Johnson.png",
    name: "Anna Johnson",
    prof: "WEB DESIGNER",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal",
  },
  {
    avatar: "images/Peter_Jones.png",
    name: "Peter Jones",
    prof: "INTERN",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag",
  },
  {
    avatar: "images/Bill_Anderson.png",
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

  if (currentIndex > reviews.length - 1) {
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
    currentIndex = reviews.length - 1;
  }

  renderReview();
  console.log(currentIndex);
}

const clickBackReview = document.getElementById("btn-prev");
clickBackReview.addEventListener("click", backReview);

function randomReviews() {
  let randomIndex = Math.floor(Math.random() * reviews.length);
  currentIndex = randomIndex;
  renderReview();
}

const clickRandomReview = document.getElementById("btn-random")
clickRandomReview.addEventListener('click', randomReviews)

function openForm() {
  const modalWindow = document.getElementById("modal-window")
  // modalWindow.classList.toggle('hidden')
  modalWindow.classList.toggle('flex')
  cleanForm()
  myError.innerHTML = ""
}

const clickGiveReview = document.getElementById("btn-give-feedback")
clickGiveReview.addEventListener('click', openForm)

const clickCross = document.getElementById("btn-close-form")
clickCross.addEventListener('click', openForm)

const myError = document.getElementById("error")

function saveReview() {
  let avatarValue = document.getElementById("avatar-add").value
  const nameValue = document.getElementById("name-add").value
  const profValue = document.getElementById("prof-add").value
  const textValue = document.getElementById("text-add").value
  

  if (nameValue.length === 0 || profValue.length === 0 || textValue.length === 0) {
      myError.innerHTML = "Drop the form"
      return
  }

  if (avatarValue.length === 0) {
      avatarValue = "images/image-none.png"
      console.log(avatarValue)
  }

  const imageFormats = ["jpg", "png"]
  const arr = avatarValue.split(".")
  const imageFormat = arr[arr.length - 1]
  const isNeedFormat = imageFormats.includes(imageFormat)

  if (!isNeedFormat) {
      myError.innerHTML = "Format should be only .png or .jpg"
      return
  }

  const review = {
      avatar: avatarValue,
      name: nameValue,
      prof: profValue,
      text: textValue
  }
  
  reviews.push(review)
  currentIndex = reviews.length - 1
  renderReview()
  openForm()
}

const clickAddReview = document.getElementById('btn-add-feedback')
clickAddReview.addEventListener('click', saveReview)

function cleanForm() {
  document.getElementById("avatar-add").value = ""
  document.getElementById("name-add").value = ""
  document.getElementById("prof-add").value = ""
  document.getElementById("text-add").value = ""
}

renderReview();
