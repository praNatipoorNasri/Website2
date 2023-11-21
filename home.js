function handleSubmit () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const score = document.getElementById('score').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname);
     localStorage.setItem("SCORE", score)*/
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("SURNAME", surname);
    sessionStorage.setItem("SCORE", score);


    return;
}

