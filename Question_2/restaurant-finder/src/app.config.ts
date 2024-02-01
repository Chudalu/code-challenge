export default () => ({
    port: process.env.PORT || 3500,
    databaseUrl: process.env.DATABASE_URL || `postgresql:postgres:0000@localhost:5432/ivorypay`,
    encryptionKey: process.env.ENCRYPTION_KEY || 'ENCRYPTIONKEY06434343434340',
    websiteUrl: process.env.WEB_URL || `http://localhost:4200`
});