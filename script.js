const fileInput = document.getElementById('file-input');
  const image = document.getElementById('preview');

  fileInput.addEventListener('change', () => {
    console.log("File input changed");

  
  image.src = URL.createObjectURL(fileInput.files[0]);
  
});