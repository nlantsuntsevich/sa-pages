gapi.load('client', initClient);

function initClient() {
    gapi.client.init({
        apiKey: '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',
        clientId: '299873796074-6i1h3vrbdsd0r5b01t66sorn4kk067jl.apps.googleusercontent.com',
        discoveryDocs: ['https://photoslibrary.googleapis.com/$discovery/rest?version=v1'],
        scope: 'https://www.googleapis.com/auth/photoslibrary.readonly',
    }).then(function() {
        // API client is initialized and ready for use
    });
}

gapi.client.photoslibrary.sharedAlbums.list()
    .then(function(response) {
        const sharedAlbumId = response.result.sharedAlbums[0].id;
        return gapi.client.photoslibrary.mediaItems.search({
            albumId: sharedAlbumId,
        });
    })
    .then(function(response) {
        const mediaItems = response.result.mediaItems;
        // Process and display the images on your website
    });

    gapi.client.photoslibrary.mediaItems.search({
        albumId: sharedAlbumId,
    })
    .then(function(response) {
        const mediaItems = response.result.mediaItems;
        const imageContainer = document.getElementById('image-container'); // Replace with your container element ID
    
        mediaItems.forEach(function(mediaItem) {
            const baseUrl = mediaItem.baseUrl;
            const imageUrl = baseUrl + '=w500'; // Adjust the desired width as needed
    
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = 'Image';
            
            imageContainer.appendChild(imageElement);
        });
    })
    .catch(function(error) {
        console.error('Error fetching media items:', error);
    });