import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductTable1608149100015 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.createTable(new Table({
            name:'product',
            columns:[
                {
                    name:'id',
                    type:'int',
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'name',
                    type:'varchar'                    
                },
                {
                    name:'price',
                    type:'float'                    
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('product')
    }

}
