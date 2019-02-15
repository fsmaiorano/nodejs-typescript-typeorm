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
    // @ManyToOne(() => UserEntity, user => user.id, {
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE',
    //     nullable: false,
    //     eager: false
    // })
    // @JoinColumn({ referencedColumnName: 'id', name: 'userId' })
    // public userId!: number;
    //user!: User;
}

export default User;
