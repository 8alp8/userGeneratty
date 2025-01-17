// HTML öğelerini alıyoruz
const button = document.getElementById('fetchButton');
const userName = document.getElementById('userName');
const userAge = document.getElementById('userAge');
const userLocation = document.getElementById('userLocation');
const userEmail = document.getElementById('userEmail');
const userPhone = document.getElementById('userPhone');
const userTimeZone = document.getElementById('userTimeZone');
const userImage = document.querySelector('.table img');

// Fetcher fonksiyonu
function fetcher() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())  // "Response" yerine "response"
    .then(data => {
        const user = data.results[0];  // Veriyi al

        // Kullanıcı bilgilerini HTML'e yerleştir
        userName.textContent = `${user.name.first} ${user.name.last}`;
        userAge.textContent = user.dob.age;
        userLocation.textContent = `${user.location.city}, ${user.location.country}`;
        userEmail.textContent = user.email;
        userPhone.textContent = user.phone;
        userTimeZone.textContent = user.location.timezone.offset;
        userImage.src = user.picture.large; // Kullanıcı resmini yerleştir
    })
    .catch(error => console.error('Error:', error));  // Hata durumunda mesaj yazdır
}

// Event Listener: Butona tıklanınca fetcher fonksiyonu çalışacak
button.addEventListener('click', fetcher);
