import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.block9{
   export class Person extends Participant {
      PPSN: string;
      name: string;
      phNum: string;
      address: string;
   }
   export class Vet extends Participant {
      vetId: string;
      vetName: string;
      vetAddress: string;
      databaseProvider: DatabaseProvider;
   }
   export class DatabaseProvider extends Participant {
      dbProviderId: string;
      microChips: MicroChip[];
   }
   export class Regulator extends Participant {
      regId: string;
      regdVets: Vet[];
      regdDatabaseProviders: DatabaseProvider[];
   }
   export class Breeder extends Participant {
      breederId: string;
      microChips: MicroChip[];
   }
   export class MicroChip extends Asset {
      MicroChipID: string;
   }
   export class Animal extends Asset {
      AnimalId: string;
      owner: Person;
      microChip: MicroChip;
      breeder: Breeder;
   }
// }
