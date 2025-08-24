async function getData() {
    const id = document.getElementById("dataId").value;
    try {
        const url = `http:localhost:8080/getDataById/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        document.getElementById("result").innerText = JSON.stringify(data);
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("result").innerText = "Error fetching data";
    }
};

async function getAllData() {
    try {
        const url = "http:localhost:8080/getData";
        const res = await fetch(url);
        const data = await res.json();
        document.getElementById("result").innerText = JSON.stringify(data);
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("result").innerText = "Error fetching data";
    }
};