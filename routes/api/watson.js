// import dependencies
const express = require("express");
const router = express.Router();
const AssistantV2 = require("ibm-watson/assistant/v2");
const {IamAuthenticator} = require("ibm-watson/auth");

// create instance of assistant


// first authenticate
const authenticator = new IamAuthenticator({
  apikey: process.env.WATSON_ASSISTANT_APIKEY,
});

// connection to the assistant
const assistant = new AssistantV2({
  version:"2021-02-28",
  authenticator:authenticator,
  url: process.env.WATSON_ASSISTANT_URL,
});

// route to handle session tokens
// GET /api/watson/session
router.get("/session", async (req,res) => {
    //  if success
    try{
      const session = await assistant.createSession({
        assistantId: process.env.WATSON_ASSISTANT_ID
      })
      res.json(session['result']);

  //  if fail
    }catch(err){
      res.send("There was an error while processing this request.");
      console.log(err);
    }
});


// handle message


// export routes
module.exports = router;
