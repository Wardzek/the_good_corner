import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm"
import { Ad } from "./ad"

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 100,
    })
    name!: string

    @OneToMany(() => Ad, (ad) => ad.category)
    ads!: Ad[]
}