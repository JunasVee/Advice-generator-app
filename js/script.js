const quotes = document.querySelector("#quote")
const button = document.querySelector(".refresh")
const quote = document.querySelector(".quote")
const title = document.querySelector(".title")

button.addEventListener('click', generateQuote)

generateQuote()


async function generateQuote(){

    
        const config = {
            headers: {
                Accept: 'JSONP',
            },
        }
    
  
      const response = await fetch('https://api.adviceslip.com/advice', config)
      
      const data = await response.json()
    
 
      quote.innerHTML = data.slip.advice
      title.innerText = "Advice #" + data.slip.id

           
    }