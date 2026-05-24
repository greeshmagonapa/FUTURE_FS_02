const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const FILE_PATH = path.join(__dirname, "data", "leads.json");

app.get("/", (req, res) => {
    res.send("Mini CRM Backend Running");
});

app.get("/api/leads", (req, res) => {

    const data = fs.readFileSync(FILE_PATH);

    const leads = JSON.parse(data);

    res.json(leads);
});

app.post("/api/leads/add", (req, res) => {

    const data = fs.readFileSync(FILE_PATH);

    const leads = JSON.parse(data);

    const newLead = {
        id: Date.now(),
        ...req.body
    };

    leads.push(newLead);

    fs.writeFileSync(
        FILE_PATH,
        JSON.stringify(leads, null, 2)
    );

    res.status(201).json(newLead);
});

app.put("/api/leads/:id", (req, res) => {

    const data = fs.readFileSync(FILE_PATH);

    let leads = JSON.parse(data);

    leads = leads.map((lead) => {

        if (lead.id == req.params.id) {

            return {
                ...lead,
                ...req.body
            };
        }

        return lead;
    });

    fs.writeFileSync(
        FILE_PATH,
        JSON.stringify(leads, null, 2)
    );

    res.json({
        message: "Lead Updated"
    });
});

app.delete("/api/leads/:id", (req, res) => {

    const data = fs.readFileSync(FILE_PATH);

    let leads = JSON.parse(data);

    leads = leads.filter(
        (lead) => lead.id != req.params.id
    );

    fs.writeFileSync(
        FILE_PATH,
        JSON.stringify(leads, null, 2)
    );

    res.json({
        message: "Lead Deleted"
    });
});

const PORT =5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);
});
