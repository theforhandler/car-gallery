const galleryArray = ['cars1.jpg', 'cars2.jpg', 'cars3.jpg', 'cars4.jpg', 'cars5.jpg', 'cars6.jpg', 'cars7.jpg', 'cars8.jpg', 'cars9.jpg', 'cars10.jpg'];

function createTiles() {
    const myAppElement = document.getElementById('app');

    // BIG-IMAGES
    const bigimages = document.createElement('section');
    bigimages.id = "bigimages";
    myAppElement.appendChild(bigimages);

    // SMALLE-IMAGES
    const tiles = document.createElement('section');
    tiles.id = "tiles";
    myAppElement.appendChild(tiles);

    // bigimg
    const bigimg = document.createElement('img')
    bigimg.src = 'assets/img/cars1.jpg'
    bigimg.id = "bigimg";
    bigimages.appendChild(bigimg);

    galleryArray.forEach(
        (imgName, index) => {
            if (index > 0) {
                console.log(index)
                const smallimages = document.createElement('img')
                smallimages.src = 'assets/img/' + imgName
                smallimages.classList.add('smallimages')
                tiles.appendChild(smallimages);

                smallimages.addEventListener('click', () => {
                    changeImage(smallimages);
                });
            }
        }
    );

    function changeImage(clickedImage) {
        const bigimg = document.getElementById('bigimg');
        const bigimgUrl = bigimg.src;

        bigimg.src = clickedImage.src;
        clickedImage.src = bigimgUrl;
    }
}

createTiles();