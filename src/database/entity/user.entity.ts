import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public name: string = '';

    @Column()
    public email: string = '';

    @Column()
    public password: string = '';

    //example
    //@ManyToOne(type => User, user => user.id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    //user!: User;
}

export default User;
