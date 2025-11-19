const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const x = Math.random() * (window.innerWidth - btn.offsetWidth);
  const y = Math.random() * (window.innerHeight - btn.offsetHeight);

  btn.style.left = x + "px";
  btn.style.top = y + "px";

  console.log("hi");
});

