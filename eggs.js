document.getElementById("egg-hover").addEventListener("mouseover", () => {
  count("hover");
});

document.getElementById("egg-link").addEventListener("click", (event) => {
  count("link", event);
});
