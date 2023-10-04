
// function do_work()
// {
//     gapi.client.photoslibrary.sharedAlbums.list()
//     .then(function(response) {
//         const sharedAlbumId = response.result.sharedAlbums[0].id;
//         return gapi.client.photoslibrary.mediaItems.search({
//             albumId: sharedAlbumId,
//         });
//     })
//     .then(function(response) {
//         const mediaItems = response.result.mediaItems;
//         // Process and display the images on your website
//     });

//     gapi.client.photoslibrary.mediaItems.search({
//         albumId: sharedAlbumId,
//     })
//     .then(function(response) {
//         const mediaItems = response.result.mediaItems;
//         const imageContainer = document.getElementById('image-container'); // Replace with your container element ID
    
//         mediaItems.forEach(function(mediaItem) {
//             const baseUrl = mediaItem.baseUrl;
//             const imageUrl = baseUrl + '=w500'; // Adjust the desired width as needed
    
//             const imageElement = document.createElement('img');
//             imageElement.src = imageUrl;
//             imageElement.alt = 'Image';
            
//             imageContainer.appendChild(imageElement);
//         });
//     })
//     .catch(function(error) {
//         console.error('Error fetching media items:', error);
//     });
// }
