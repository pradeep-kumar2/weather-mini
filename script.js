// live date and time 

function liveDate(){
    const currentDate=document.getElementById('dateTime');
    const now=new Date();
    const options={
        year: 'numeric',
        month:'long',
        day:'numeric'
    };
    const dateString = now.toLocaleString('en-US', options);
    currentDate.textContent = dateString;
}

liveDate();

setInterval(liveDate,1000);


//weather api

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitButton');
    const cityInput = document.getElementById('liveLoc');
    const content = document.getElementById('content');
    const apiKey = '9c7cb7f94d9c667b769ccdb6ae78a82f';

    submitBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();

        if (city !== '') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;

                    // Display weather information
                    content.innerHTML = `
                        <h2><span class='city'> ${city}</h2>
                        <p><span class='temperature'>${temperature}°C</p>
                        <p><span class='description'>${description}</p>
                        
                    `;

                    cityInput.value='';
                })
                .catch(error => {
                    console.error('There was a problem with your fetch operation:', error);
                });
        } else {
            alert('Please enter a city name.');
        }
    });
});

//increase container size

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var content = ""; 

    // Display content
    document.getElementById('content').innerHTML = content;
    document.getElementById('content').classList.add('show-content');
    

    // Increase container size
    document.getElementById('container').style.width = '450px';
    document.getElementById('container').style.height = '400px';
    document.getElementById('content').style.margin ='50px';
});

//keydown enter

document.addEventListener('DOMContentLoaded',()=>{
    const cityInput=document.getElementById('liveLoc');
    const submitBtn=document.getElementById('submitButton');

    cityInput.addEventListener('keydown',(event)=>{
        if(event.key==='Enter'){
            event.preventDefault();
            submitBtn.click();
        }
    });
    submitBtn.addEventListener('click',()=>{
        const cityName=cityInput.value.trim();
        console.log('submitted city',cityName);
    });
});


