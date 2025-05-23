 const stories = [
    { collapseId: "story1", toggleTextId: "toggleText1" },
    { collapseId: "story2", toggleTextId: "toggleText2" },
    { collapseId: "story3", toggleTextId: "toggleText3" },
    { collapseId: "story4", toggleTextId: "toggleText4" },
    { collapseId: "story5", toggleTextId: "toggleText5" },
    { collapseId: "story6", toggleTextId: "toggleText6" },
  ];

  stories.forEach(({ collapseId, toggleTextId }) => {
    const collapseEl = document.getElementById(collapseId);
    const toggleText = document.getElementById(toggleTextId);

    collapseEl.addEventListener("shown.bs.collapse", () => {
      toggleText.textContent = "Read Less";
    });

    collapseEl.addEventListener("hidden.bs.collapse", () => {
      toggleText.textContent = "Read More";
    });
  });