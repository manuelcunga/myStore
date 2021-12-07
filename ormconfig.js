const { HOST, USER_NAME, DB_NAME, PASSWORD, PORT, DB_TEST } = process.env

module.exports = {
  type: DB_TEST || 'postgres',
  host: HOST,
  logging: false,
  port: PORT,
  username: USER_NAME,
  password: PASSWORD,
  database: DB_NAME,
  Storage: DB_TEST,
  entities: [
    './src/modules/**/entities/*.ts'
  ],
  migrations: [
    './src/shared/infra/typeorm/migrations/*.ts'
  ],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations/'
  }
}
