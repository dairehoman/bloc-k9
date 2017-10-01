/**
 *
 * @param {org.acme.block9} setup
 * @transaction
 */
function setup(setup) {
    console.log('setting up app');
    var factory = getFactory();
    var NS = 'org.acme.block9';

    var people = [
        factory.newResource(NS, 'Person', 'PERSON_1'),
        factory.newResource(NS, 'Person', 'PERSON_2'),
        factory.newResource(NS, 'Person', 'PERSON_3'),
        factory.newResource(NS, 'Person', 'PERSON_4'),
        factory.newResource(NS, 'Person', 'PERSON_5')        
    
    ];

    var dbProviders = [
        factory.newResource(NS, 'DatabaseProvider', 'DB_1'),
        factory.newResource(NS, 'DatabaseProvider', 'DB_2'),
        factory.newResource(NS, 'DatabaseProvider', 'DB_3'),
        factory.newResource(NS, 'DatabaseProvider', 'DB_4')
    ];

    var vets = [
        factory.newResource(NS, 'Vet','VET_1'),
        factory.newResource(NS, 'Vet','VET_2'),
        factory.newResource(NS, 'Vet','VET_3'),
        factory.newResource(NS, 'Vet','VET_4'),
        factory.newResource(NS, 'Vet','VET_5')     
    ];

    var animals = [
        factory.newResource(NS, 'Animal', 'ANIMAL_1'),
        factory.newResource(NS, 'Animal', 'ANIMAL_2'),
        factory.newResource(NS, 'Animal', 'ANIMAL_3'),
        factory.newResource(NS, 'Animal', 'ANIMAL_4'),
        factory.newResource(NS, 'Animal', 'ANIMAL_5'),
        factory.newResource(NS, 'Animal', 'ANIMAL_6'),
        factory.newResource(NS, 'Animal', 'ANIMAL_7'),
        factory.newResource(NS, 'Animal', 'ANIMAL_8')
    ];
    
    return getParticipantRegistry(NS + '.Regulator')
  .then(function(regulatorRegistry) {
      var regulator = factory.newResource(NS, 'Regulator', 'REGULATOR');
      regulator.email = 'REGULATOR';
      regulator.firstName = 'Ronnie';
      regulator.lastName = 'Regulator';
      return regulatorRegistry.addAll([regulator]);
  })
  .then(function() {
      return getParticipantRegistry(NS + '.Farmer');
  })
  .then(function(farmerRegistry) {
      farmers.forEach(function(farmer) {
          var sbi = 'BUSINESS_' + farmer.getIdentifier().split('_')[1];
          farmer.firstName = farmer.getIdentifier();
          farmer.lastName = '';
          farmer.address1 = 'Address1';
          farmer.address2 = 'Address2';
          farmer.county = 'County';
          farmer.postcode = 'PO57C0D3';
          farmer.business = factory.newResource(NS, 'Business', sbi);
      });
      return farmerRegistry.addAll(farmers);
  })
  .then(function() {
      return getAssetRegistry(NS + '.Business');
  })
  .then(function(businessRegistry) {
      businesses.forEach(function(business, index) {
          var cph = 'FIELD_' + (index + 1);
          var farmer = 'FARMER_' + (index + 1);
          business.address1 = 'Address1';
          business.address2 = 'Address2';
          business.county = 'County';
          business.postcode = 'PO57C0D3';
          business.owner = factory.newRelationship(NS, 'Farmer', farmer);
      });

      return businessRegistry.addAll(businesses);
  })
  .then(function() {
      return getAssetRegistry(NS + '.Field');
  })
  .then(function(fieldRegistry) {
      fields.forEach(function(field, index) {
          var business = 'BUSINESS_' + ((index % 2) + 1);
          field.name = 'FIELD_' + (index + 1);
          field.business = factory.newRelationship(NS, 'Business', business);
      });
      return fieldRegistry.addAll(fields);
  })
  .then(function() {
      return getAssetRegistry(NS + '.Animal');
  })
  .then(function(animalRegistry) {
      animals.forEach(function(animal, index) {
          var field = 'FIELD_' + ((index % 2) + 1);
          var farmer = 'FARMER_' + ((index % 2) + 1);
          animal.species = 'SHEEP_GOAT';
          animal.movementStatus = 'IN_FIELD';
          animal.productionType = 'MEAT';
          animal.location = factory.newRelationship(NS, 'Field', field);
          animal.owner = factory.newRelationship(NS, 'Farmer', farmer);
      });
      return animalRegistry.addAll(animals);
  });
}