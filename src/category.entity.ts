import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany  } from 'typeorm'
import { Product } from './product/product.entity'


@Entity()
export class Category{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @OneToMany(type => Product, category => Category)
    produto: Product[];

    @CreateDateColumn({ type:'timestamp'})
    created_at:Date;
}