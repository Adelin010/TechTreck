function connectDatabase() {
  const didConnect = database.connect();
  //A side efect expected -> connecting to the database
  if (didConnect) {
    return true;
  } else {
    //the message that execute another 
    console.log('Could not connect to database!');
    return false;
  }
}

//in place you can do
function connect(){
  const didConnect = database.connect();
  return didConnect;
}

function initApp(){
  const dbConnection = connect();
  if(dbConnection){
    console.log("App initialised correctly...");
  }else{
    console.log("An error occured at the connection with the database...");
  }
}
//for the first function

function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    //get rid of the console.log()
    return false;
  }
  return true;
}

function auth(email, password){
  if(isValid(email, password)){
    console.log("Authentication successed...");
  }else{
    console.log("Authentication failed...");
  }
}