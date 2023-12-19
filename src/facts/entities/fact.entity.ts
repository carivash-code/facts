import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Fact {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "longtext"})
  text: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

}

