const accessKey = 'YiyymxUO5Lagn4m1wPZVObT6TJnZi3a0YRnxy9uX5d8'; 
const photoContainer = document.getElementById('photoContainer');
const searchInput = document.getElementById('searchInput');

async function fetchPhotos(query) {
  const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKey}&count=10`);
  const data = await response.json();
  return data;
}

function displayPhotos(photos) {
  photoContainer.innerHTML = '';
  photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.urls.regular;
    img.alt = photo.alt_description || 'Photo';
    photoContainer.appendChild(img);
  });
}

async function searchPhotos() {
  const query = searchInput.value;
  if (query) {
    try {
      const photos = await fetchPhotos(query);
      displayPhotos(photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  } else {
    Swal.fire({
        title: "Please enter a search term",
        icon: "error",
        confirmButtonText: "OK",
      });
  }
}
