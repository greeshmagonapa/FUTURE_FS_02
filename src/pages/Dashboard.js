import React, { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

    const [leads, setLeads] = useState([]);

    const [form, setForm] = useState({
        name: "",
        email: "",
        source: "",
        notes: ""
    });

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = async () => {

        try {

            const res = await API.get("/leads");

            if (Array.isArray(res.data)) {
                setLeads(res.data);
            } else {
                setLeads([]);
            }

        } catch (error) {

            console.log("Error fetching leads:", error);

            setLeads([]);
        }
    };

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const addLead = async () => {

        try {

            await API.post("/leads/add", {
                ...form,
                status: "new",
                notes: form.notes
            });

            fetchLeads();

            setForm({
                name: "",
                email: "",
                source: "",
                notes: ""
            });

        } catch (error) {

            console.log("Error adding lead:", error);
        }
    };

    const updateStatus = async (id) => {

        try {

            await API.put(`/leads/${id}`, {
                status: "contacted"
            });

            fetchLeads();

        } catch (error) {

            console.log("Error updating status:", error);
        }
    };

    const deleteLead = async (id) => {

        try {

            await API.delete(`/leads/${id}`);

            fetchLeads();

        } catch (error) {

            console.log("Error deleting lead:", error);
        }
    };
    const updateNotes = async (id) => {

    const newNote = prompt("Enter follow-up note");

    if (!newNote) return;

    try {

        await API.put(`/leads/${id}`, {
            notes: newNote
        });

        fetchLeads();

    } catch (error) {

        console.log("Error updating notes:", error);
    }
};
    return (
        <div style={{ padding: "20px" }}>

            <h1>Mini CRM Dashboard</h1>

            <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="text"
                name="source"
                placeholder="Source"
                value={form.source}
                onChange={handleChange}
            />
            <br /><br />

           <textarea
            name="notes"
             placeholder="Follow-up Notes"
            value={form.notes}
            onChange={handleChange}
>              </textarea>

            <br /><br />

            <button onClick={addLead}>
                Add Lead
            </button>

            <hr />

            {leads.length === 0 ? (
                <p>No leads available</p>
            ) : (
                leads.map((lead) => (

                    <div
                        key={lead.id}
                        style={{
                            border: "1px solid gray",
                            padding: "10px",
                            marginBottom: "10px"
                        }}
                    >

                        <h3>{lead.name}</h3>

                        <p>{lead.email}</p>

                        <p>Source: {lead.source}</p>

                        <p>Status: {lead.status}</p>
                        <p>Notes: {lead.notes}</p>

                        <button
                            onClick={() => updateStatus(lead.id)}
                        >
                            Mark Contacted
                        </button>

                        <button
                            onClick={() => deleteLead(lead.id)}
                            style={{ marginLeft: "10px" }}
                        >
                            Delete
                        </button>
                        <button onClick={() => updateNotes(lead.id)}
                         style={{ marginLeft: "10px" }}
                         >
                        Add Follow-up
                       </button>

                    </div>
                ))
            )}

        </div>
    );
}

export default Dashboard;