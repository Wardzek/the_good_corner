import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, CreateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Category } from "./category";
import { Tag } from "./tag";

@Entity()
export class Ad extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title!: string

    @Column("text")
    description!: string

    @Column()
    owner!: string

    @Column("double")
    price!: number

    @CreateDateColumn()
    createdAt!: Date

    @Column()
    imageUrl!: string

    @Column()
    city!: string

    @ManyToOne(() => Category, (category) => category.ads)
    category!: Category; 
    
    @ManyToMany(() => Tag, (tag) => tag.ads)
    @JoinTable()
    tags!: Tag[];
}