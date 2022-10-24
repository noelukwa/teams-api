import express from "express";

const app = express();

app.use(express.json());

// AUTH ROUTES
app.post("/accounts");
app.post("/sessions");
app.get("/sessions");

// TEAMS
app.get("/teams");
app.post("/teams/invite");
app.post("/teams/roles");
app.get("/teams/roles");
app.put("/teams/roles/:id");
app.get("/teams/permissions");

// WALLET
app.get("/wallet/balance");
app.get("/wallet/history");

// SALES
app.get("/sales");
app.post("/sales");
