import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { User } from './User';

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    userId: string;

    @ManyToOne(_type => User, type => type.photos)
    @JoinColumn({ name: 'userId' })
    user: User;
}
