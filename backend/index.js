const express = require("express");
const cors = require("cors");
const axios = require("axios");


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/' , 
        {username : username , secret : username , first_name : username },
        {headers : {"private-key" : "1b471e38-0264-4c5b-860b-ae7344df72d2" }}
    )
    return res.status(r.status).json(r.data)
    
  } catch (e) {
    //return res.status(e.response.status).json(e.response.data);
    console.log(e);
  }
});

app.listen(3001);
