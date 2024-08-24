import { faker } from "@faker-js/faker";

export class Challenge {
  name = faker.person.firstName();
  id = faker.database.mongodbObjectId();
}
