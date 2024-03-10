let number = 123;
let string = "text";
let abc = null;
let abcd = undefined;
let boolean = true;




let arr=["com", "chao", "bun"]
// console.log(acc[2].img);
let arr2 = arr
arr2.push("pho")
let arr3 = [...arr]
arr3.push("rau")
console.log(arr);
console.log(arr2);
console.log(arr3);

let app = document.querySelector(".app")
fetch(`https://659a07f0652b843dea534166.mockapi.io/product`)
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP error! Status: ${response..status');
        }
        console.log((response));
        return response.json();
        })
    .then(data => {
        console.log(data);
        let htmlPrds = ""
        for(let i = 0;i<data.length;i++){
            let htmlPrd = `
            <div>${data[i].name}</div>
            <div>${data[i].avatar}</div>
            <div>${data[i].title}</div>`
            htmlPrds += htmlPrd
        }
        app.innerHTML = htmlPrds
    })
    .catch(error => {
        console.error('Fetch error:', error);

    });