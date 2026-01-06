const blocks = document.querySelectorAll(".block");

blocks.forEach(block => {
  
  
  block.addEventListener("wheel", event => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      block.scrollLeft += event.deltaY;
    }
  }, { passive: false });

  
  block.addEventListener("mouseenter", () => {
    document.addEventListener("keydown", keyScroll);
  });

  block.addEventListener("mouseleave", () => {
    document.removeEventListener("keydown", keyScroll);
  });

  function keyScroll(e) {
    if (e.key === "ArrowRight") {
      block.scrollLeft += 50;
    }
    if (e.key === "ArrowLeft") {
      block.scrollLeft -= 50;
    }
  }

});

