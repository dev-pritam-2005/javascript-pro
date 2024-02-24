const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // db calls etc.
    setTimeout(function () {
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function () {
    console.log('promise consumed' );
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(() => {
        resolve({username : "pritam.dev",email:"zgodx@example.com"})
    }, 1000);
    
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username:"pritam", password:"123456"})
            
        }
        else{
            reject('ERROR:somthing went wrong')
        }

    }, 1000);
    })

    promiseFour.then((user)=>{
        console.log(user);
        return user.username
    }).then((username)=>{
        console.log(username);
    }).catch(function (error) {
        console.log(error);
        
    }).finally(()=>{
        console.log("the promise is either rejected or accepted")
    })


    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if (!error) {
                resolve({username: "javascript", password: "123"})
            } else {
                reject('ERROR: JS went wrong')
            }
        }, 1000)
    });
    
    async function consumePromiseFive(){
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    
    consumePromiseFive()
    
    // async function getAllUsers(){
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    //         const data = await response.json()
    //         console.log(data);
    //     } catch (error) {
    //         console.log("E: ", error);
    //     }
    // }
    
    //getAllUsers()
    
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))
    
    // promise.all
    // yes this is also available, kuch reading aap b kro.
