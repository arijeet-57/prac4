import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:npg_r53aKouxgyJZ@ep-dry-brook-adeoqkmu-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
    await client.connect();
    return client;
}

//here i have used neondb and made an instance in it online as for just praciticing and understanding this codebase (cloned using git)