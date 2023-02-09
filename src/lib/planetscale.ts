import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';
import { PUBLIC_DATABASE_URL } from '$env/static/public';

interface GuestbookTable {
  email: string;
  body: string;
  created_by: string;
}

interface Database {
  guestbook: GuestbookTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: PUBLIC_DATABASE_URL,
  }),
});
