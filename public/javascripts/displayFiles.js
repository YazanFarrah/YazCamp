function displayFiles(input) {
    var fileContainer = document.querySelector("#fileContainer");
    fileContainer.innerHTML = ""; // Clear previous content

    var files = input.files;

    for (var i = 0; i < files.length; i++) {
      var fileName = files[i].name;

      // Create an image element
      // var imgElement = document.createElement("img");
      // imgElement.src = URL.createObjectURL(files[i]);
      // imgElement.alt = fileName;
      // imgElement.style.maxWidth = "50%";
      // imgElement.style.maxHeight = "50%"
      // imgElement.style.marginBottom = "10px";

      fileContainer.append(fileName + ", ");

      // Append the image element to the fileContainer
      // fileContainer.appendChild(fileName);
    }
  }