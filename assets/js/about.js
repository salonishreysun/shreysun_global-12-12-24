const fullText = `Shreysun Global Group is dedicated to delivering the highest standards of crewing, technical, flag state documentation, and maritime training services. We are committed to providing superior service and ensuring complete client satisfaction while fostering the growth and success of ship owners, managers, and seafarers. Our mission is to create a healthy environment for seafarers in the maritime industry, prioritizing their safety and mental well-being. By offering top-quality services, we aim to build long-lasting relationships with our customers based on trust and excellence.`;

function toggleText() {
  const textElement = document.getElementById("text");
  const toggleLink = document.getElementById("toggle-more");

  if (textElement.classList.contains("collapsed")) {
    textElement.innerHTML = fullText;
    textElement.classList.remove("collapsed");
    toggleLink.textContent = "Show Less";
  } else {
    const truncatedText = fullText.split(" ").slice(0, 15).join(" ") + "...";
    textElement.innerHTML = truncatedText;
    textElement.classList.add("collapsed");
    toggleLink.textContent = "Read More";
  }
}

// Initialize with collapsed text
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("text");
  textElement.innerHTML = fullText.split(" ").slice(0, 15).join(" ") + "...";
  textElement.classList.add("collapsed");
});

const visionFullText = `We deliver to Maritime Industries highest quality services as Crewing, Technical, Safe Operation of the Vessel and Pre-Sea, Post-Sea Training for the clients. We will be providing on time and fully clients satisfaction services.`;

function toggleVisionText() {
  const visionText = document.getElementById("vision-text");
  const visionToggleLink = document.getElementById("vision-toggle-more");

  if (visionText.classList.contains("collapsed")) {
    visionText.innerHTML = visionFullText;
    visionText.classList.remove("collapsed");
    visionToggleLink.textContent = "Show Less";
  } else {
    const truncatedVisionText =
      visionFullText.split(" ").slice(0, 15).join(" ") + "...";
    visionText.innerHTML = truncatedVisionText;
    visionText.classList.add("collapsed");
    visionToggleLink.textContent = "Read More";
  }
}

// Initialize with collapsed text
document.addEventListener("DOMContentLoaded", () => {
  const visionText = document.getElementById("vision-text");
  visionText.innerHTML =
    visionFullText.split(" ").slice(0, 15).join(" ") + "...";
  visionText.classList.add("collapsed");
});
