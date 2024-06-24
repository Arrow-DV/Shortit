let result = document.getElementById('result');
result.value = 'result will be displayed in this area';
let link = document.getElementById('link');

function short() {



    fetch('http://tinyurl.com/api-create.php?url=' + encodeURIComponent(link.value))
        .then(response => {
            if (response.ok) {
                return response.text(); // Parse response as text
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {
            result.value = data
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
