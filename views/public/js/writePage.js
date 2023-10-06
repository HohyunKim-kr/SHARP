const selectValue = document.querySelector("#selectBox").value;

document.querySelector("#btnPush").addEventListener("click", () => {
  if (selectValue === "0") {
    return;
  }
  location.href = `/boards/writeBoard?boardType=${selectValue}`;
});
