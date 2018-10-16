function displayOnLoad() {
    client = getClient();
    db = getDB(client);

    client.auth
        .loginWithCredential(new stitch.AnonymousCredential())
        .then(displayStrings)
        .catch(console.error);
}

function displayStrings() {
  db.collection('strings')
    .find({}, { limit: 100 })
    .asArray()
    .then(docs => docs.map(doc => `<div>${doc.content}</div>`).join(''))
    .then(strings => document.getElementById("strings").innerHTML = strings)
    .catch(err => console.log(err));
}

function addString(string) {
  client = getClient();
  db = getDB(client);

  client.auth
    .loginWithCredential(new stitch.AnonymousCredential())
    .then(() => db.collection("strings").insertOne({content: string}))
    .catch(err => console.error(err));
}

function addString(string) {
    client = getClient();
    db = getDB(client);
  
    client.auth
      .loginWithCredential(new stitch.AnonymousCredential())
      .then(() => db.collection("strings").insertOne({content: string}))
      .catch(err => console.error(err));
}

function addWord(word) {
    client = getClient();
    db = getDB(client);
  
    client.auth
      .loginWithCredential(new stitch.AnonymousCredential())
      .then(() => db.collection("words").insertOne(word))
      .catch(err => console.error(err));
}

function getClient() {
    return stitch.Stitch.initializeDefaultAppClient('offsite-language-app-oubno');
}

function getDB(client) {
    return client.getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas').db('lang');
}

function getWordToSave() {
    textbox = document.getElementById('paragraph')
    trinput = document.getElementById('selectionTranslation')
    t = textbox.value.substr(textbox.selectionStart, textbox.selectionEnd - textbox.selectionStart);
    word = {
        'from': 
    }
    addWord()
    console.log(t)
}