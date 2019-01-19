const instagramURL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=183267602.d926fa1.413c1151bafe4f6b8aa7556693c3809a';
// const instagramURL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=d42a2502d6304acab91870eda23e65d5';
const instaRequest = new XMLHttpRequest();
let instaData = {};

function loadInstagram() {
    instaRequest.open('GET', instagramURL, true);
    instaRequest.send();
    instaRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            instaData = JSON.parse(instaRequest.responseText);
            document.getElementById('insta1').style.backgroundImage = `url('${instaData.data[0].images.low_resolution.url}')`;
            document.getElementById('insta2').style.backgroundImage = `url('${instaData.data[1].images.low_resolution.url}')`;
            document.getElementById('insta3').style.backgroundImage = `url('${instaData.data[2].images.low_resolution.url}')`;
            // document.getElementById('insta4').style.backgroundImage = `url('${instaData.data[3].images.low_resolution.url}')`;
            document.getElementById('insta1Cap').innerHTML = instaData.data[0].caption.text;
            document.getElementById('insta2Cap').innerHTML = instaData.data[1].caption.text;
            document.getElementById('insta3Cap').innerHTML = instaData.data[2].caption.text;
            // document.getElementById('insta4Cap').innerHTML = instaData.data[3].caption.text;

        }
    };
};
                                                                                                // d42a2502d6304acab91870eda23e65d5                                                             