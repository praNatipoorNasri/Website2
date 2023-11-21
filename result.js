window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); 
    const score = params.get('score'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); 
    const score = localStorage.getItem('score') */
    
    const name = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('SURNAME');
    const score = sessionStorage.getItem('SCORE');
    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;
    document.getElementById('result-score').innerHTML = score;


})

