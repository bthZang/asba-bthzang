import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Faculty } from 'src/faculty/entities/faculty.entity';
import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Lecturer {
  @PrimaryColumn()
  @Field()
  lecturer_id: string;

  @Column()
  @Field()
  display_name: string;

  @Column()
  @Field(() => Int)
  mscb: string;

  @ManyToOne(() => Faculty, (faculty) => faculty.lecturers)
  @JoinColumn({ name: 'faculty_id' })
  @Field(() => Faculty, { nullable: true })
  faculty: Faculty;

  @Column()
  @Field({ nullable: true })
  username: string;

  @Column()
  @Field({ nullable: true })
  learning_position: string;

  @Column()
  @Field({ nullable: true })
  birth_date: Date;
}
