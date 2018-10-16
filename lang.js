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

function getClient() {
    return stitch.Stitch.initializeDefaultAppClient('offsite-language-app-oubno');
}

function getDB(client) {
    return client.getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas').db('lang');
}
