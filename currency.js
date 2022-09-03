document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('form').onsubmit= () => {
        fetch('https://api.exchangerate.host/latest')
            .then(response => {
            return response.json()
        })
        .then(data => {
            const currency=document.querySelector('#currency').value.toUpperCase();
            console.log(data);
            const rate=data.rates[currency];

            if(rate!=undefined){
                document.querySelector('#result').innerHTML=`1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
            }
            else
            {
                document.querySelector('#result').innerHTML=`Invalid Currency!`;
            }
            
        })
        
        .catch(error => {
            console.log('Error:',error);
        });

        return false;
    }

    
});