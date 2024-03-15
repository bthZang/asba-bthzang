import { Field, ObjectType } from '@nestjs/graphql';
import { Class } from 'src/class/entities/class.entity';
import { Faculty } from 'src/faculty/entities/faculty.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Subject {
  @Field()
  @PrimaryColumn()
  subject_id: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  display_name: string;

  @Field()
  @Column()
  faculty_id: string;

  @Field(() => Faculty, { nullable: true })
  @ManyToOne(() => Faculty)
  @JoinColumn({ name: 'faculty_id' })
  faculty: Faculty;

  @Field({ nullable: true })
  total_point: number;

  @OneToMany(() => Class, (classItem) => classItem.subject)
  classes: Class[];
}
