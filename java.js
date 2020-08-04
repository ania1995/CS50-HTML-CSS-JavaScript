function greet()
{
    let name = document.querySelector('#imie').value;
    if (name ==='')
    {
        name = 'world';
    }
   alert('Hello, ' + name + '!'); // wyskakujące okno

    document.querySelector('#result').innerHTML = 'Hello, ' + name + '!';
}

let counter = 0;

function increment()
{
    counter++;
    document.querySelector('#count').innerHTML = counter;
}

function discrement()
{
    counter--;
    document.querySelector('#count').innerHTML = counter;
}

function blink()
{
    let body = document.querySelector('#div1');
    if (body.style.visibility === 'hidden')
    {
        body.style.visibility = 'visible';
    }
    else
    {
        body.style.visibility = 'hidden';
    }
}
// Miganie co pół sekundy
window.setInterval( blink, 750)

function font_size()
{
    let font = document.querySelector('#select').value;
        document.querySelector('#p').style.fontSize = font;
}

function geolokalizacja()
{

    navigator.geolocation.getCurrentPosition(function(position) {
        document.querySelector('#div2').innerHTML = 'Twoja lokalizacja to: <br>' + (position.coords.latitude + ',   ' + position.coords.longitude);
    });
}