
function doPost(e) {

const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Donations");

const data = JSON.parse(e.postData.contents);

sheet.appendRow([
new Date(),
data.name,
data.email,
data.phone,
data.category,
data.amount,
data.reference
]);

return ContentService
.createTextOutput(JSON.stringify({status:"success"}))
.setMimeType(ContentService.MimeType.JSON);
}
