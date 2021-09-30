public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
       // List<Contact> contactList = [SELECT FirstName, LastName, Email FROM Contact LIMIT 10];
       // return contactList;
       throw new throw new AuraHandledException('Forced error');
    }

}
