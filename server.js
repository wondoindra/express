const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let schedule = require("./data");


app.use(bodyParser.json())
app.get("/", (request, response) => response.send("Hello Express!"));
app.get("/api/schedule", (request, response) => response.send(schedule));

const addSchedule = (list, newItem) => {
    list.push(newItem);
    return list;
}

app.post("/api/schedule", (request, response) => {
    const newSchedule = request.body;
    const newScheduleList = addSchedule(schedule, newSchedule);
    schedule = newScheduleList;
    response.send(schedule);
})

app.listen(3000, () => console.log("Server is listening on localhost:3000"));