const express = require("express");
const cors = require("cors");
const {getGenerateMealPlanPrompt, getGenerateDailyMealPlanPrompt}=require("./prompt");
const callToAi = require("./ai");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcom to linlet Ai server!");
});

app.post("/api/generateWeeklyPlan",async (req, res) => { 
 const {profile,requestDate}=req.body;
 const prompt=getGenerateMealPlanPrompt(profile,requestDate);
 const result=await callToAi(prompt);
 res.json(JSON.parse(result));

})

app.post("/api/generateDailyPlan",async (req, res) => {
  const {profile,requestDate}=req.body;
  const prompt=getGenerateDailyMealPlanPrompt(profile,requestDate);
  const result=await callToAi(prompt);
  res.json(JSON.parse(result));
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
