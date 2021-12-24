import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createProducts1638807324338 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'title',
            type: 'varchar'
          },
          {
            name: 'quantity',
            type: 'int'
          },
          {
            name: 'price',
            type: 'float'
          },
          {
            name: 'description',
            type: 'varchar'
          },
          {
            name: 'user_send',
            type: 'uuid'
          },
          {
            name: 'createdAt',
            type: 'date',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'FKUserPostProducts',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_send'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products')
  }
}
