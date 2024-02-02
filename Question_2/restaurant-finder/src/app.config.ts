export default () => ({
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL || `postgresql:postgres:0000@localhost:5432/ivorypay`,
});