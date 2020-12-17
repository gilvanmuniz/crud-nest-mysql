import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './../category.entity'

@Entity()
export class Product{
   
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    price:number

    @ManyToOne(type => Category)
    @JoinColumn()
    category:Category

    @CreateDateColumn({ type:'timestamp'})
    created_at:Date

}