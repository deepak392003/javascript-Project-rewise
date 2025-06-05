


const weatherApi = async (city) => {
  
    const api = '415ffda770e09fa560779f55df3bd3d5'
    const key = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`

    try {

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=415ffda770e09fa560779f55df3bd3d5`)

        const val = await res.json();

        document.querySelector('.result').innerHTML = `
        city : ${val.name}
        Temprature : ${val.main.temp}
        weather : ${val.weather[0].main}`
    }
    catch(err) {
        document.querySelector('.result').innerHTML = 'Please enter a valid api key'
    }
}

document.querySelector('.btn').addEventListener('click', async (e) => {
         
        let input = document.querySelector('#inputfield');
        
        let city = input.value.trim();
        input.value = '';


        if(city !== ''){
            await weatherApi(city);
        }
        else{

            document.querySelector('.result').innerHTML = 'PLease enter a valid api key dude'
        }
    })