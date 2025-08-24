const host = "13.201.188.2";
const port = "3000";
async function getData() {
    const id = document.getElementById("dataId").value;
    try {
        const url = `http://${host}:${port}/getDataById/${id}`;
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
        const url = `http://${host}:${port}/getData`;
        const res = await fetch(url);
        const data = await res.json();
        document.getElementById("result").innerText = JSON.stringify(data);
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("result").innerText = "Error fetching data";
    }
};
