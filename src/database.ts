import { Pool } from 'pg';

export const pool = new Pool({
  connectionString:
    'postgresql://neondb_owner:npg_rdaBtLEkR31h@ep-quiet-moon-a89uqyjg-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
});
