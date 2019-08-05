function search_div () {
    const section = document.getElementById('search_div');
    section.style.display = "flex"
    
}

function search_div_x () {
    const section = document.getElementById('search_div');
    section.style.display = "none"
}


const getRandomUser = () => {
    
    fetch('https://randomuser.me/api/?results=5')
    .then((resp) => {
        return resp.json()
    })
    .then((data) => { 
        
        let user = document.getElementById('user')
        let h4 = document.createElement('h4');
        let img = document.createElement('img');
        let div = document.createElement('div');
        let hr = document.createElement('hr');
        img.src =  data.results[0].picture.large;
        h4.innerHTML = `${ data.results[0].name.first} ${ data.results[0].name.last}`;
        div.appendChild(img);
        user.appendChild(h4);
        user.appendChild(div);
        user.appendChild(hr);

        let heraxos = document.getElementById('heraxos');
        heraxos.innerHTML = data.results[0].phone;

        let hasce = document.getElementById('hasce');
        hasce.innerHTML = data.results[0].location.city;

        let cnnyan_or = document.getElementById('cnnyan_or');
        let date = data.results[0].dob.date;
        cnnyan_or.innerHTML = date.slice(0, 10);

        let h4_2 = document.createElement('h4');
        let img_2= document.createElement('img');
        let div_2 = document.createElement('div');
        let span_2 = document.createElement('span');
        let user_2 = document.getElementById('user_2');
        img_2.src =  data.results[1].picture.large;
        h4_2.innerHTML = `${ data.results[1].name.first} ${ data.results[1].name.last}`;
        span_2.innerHTML = data.results[1].email;
        div_2.appendChild(img_2);
        div_2.appendChild(h4_2);
        user_2.appendChild(div_2);
        user_2.appendChild(span_2)

        let h4_3 = document.createElement('h4');
        let img_3= document.createElement('img');
        let div_3 = document.createElement('div');
        let span_3 = document.createElement('span');
        let user_3 = document.getElementById('user_3');
        img_3.src =  data.results[2].picture.large;
        h4_3.innerHTML = `${ data.results[2].name.first} ${ data.results[2].name.last}`;
        span_3.innerHTML = data.results[2].email;
        div_3.appendChild(img_3);
        div_3.appendChild(h4_3);
        user_3.appendChild(div_3);
        user_3.appendChild(span_3)


        let h4_4 = document.createElement('h4');
        let img_4= document.createElement('img');
        let div_4 = document.createElement('div');
        let span_4 = document.createElement('span');
        let user_4 = document.getElementById('user_4');
        img_4.src =  data.results[3].picture.large;
        h4_4.innerHTML = `${ data.results[3].name.first} ${ data.results[3].name.last}`;
        span_4.innerHTML = data.results[3].email;
        div_4.appendChild(img_4);
        div_4.appendChild(h4_4);
        user_4.appendChild(div_4);
        user_4.appendChild(span_4)


        let h4_5 = document.createElement('h4');
        let img_5 = document.createElement('img');
        let user_5 = document.getElementById('user_5');
        img_5.src =  data.results[4].picture.large;
        h4_5.innerHTML = `${ data.results[4].name.first} ${ data.results[4].name.last}`;
        user_5.appendChild(img_5);
        user_5.appendChild(h4_5)
    })
}

getRandomUser();