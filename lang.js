client = stitch.Stitch.initializeDefaultAppClient('offsite-language-app-oubno');
db = client.getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas').db('lang');

function displayOnLoad() {
  client.auth
    .loginWithCredential(new stitch.AnonymousCredential())
    .catch(console.error);

  db.collection('strings')
    .find({}, { limit: 100 })
    .asArray()
    .then(docs => docs.map(doc => `<div>${doc.content}</div>`).join(''))
    .then(strings => document.getElementById("strings").innerHTML = strings)
    .catch(err => console.log(err));
}

function addString(string) {
  client.auth
    .loginWithCredential(new stitch.AnonymousCredential())
    .catch(console.error);

  db.collection("strings")
    .insertOne({content: document.getElementById("new_string").value})
    .catch(err => console.error(err));
}
