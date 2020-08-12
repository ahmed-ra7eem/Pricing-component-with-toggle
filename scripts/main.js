let btSwitch = document.getElementById('switch'),
    month = true;

btSwitch.addEventListener('click', function () {
    btSwitch.classList.toggle('active');
    if(month) {
        document.getElementById('basic').innerHTML = '$<span>199.99</span>';
        document.getElementById('principal').innerHTML = '$<span>249.99</span>';
        document.getElementById('pro').innerHTML = '$<span>399.99</span>';
        month = false;
    } else {
        document.getElementById('basic').innerHTML = '$<span>19.99</span>';
        document.getElementById('principal').innerHTML = '$<span>24.99</span>';
        document.getElementById('pro').innerHTML = '$<span>39.99</span>';
        month = true;
    }
});