import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PlanoNutricional } from '../../plano_nutricional/entities/plano_nutricional.entity';

@Entity('refeicao_plano')
export class ReceitaPlano {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({ type: 'varchar', length: 36 })
  plano_id!: string;
  @Column({ type: 'varchar', length: 120 })
  nome!: string;
  @Column({ type: 'varchar', length: 30, nullable: true })
  horario!: string;
  @Column({ type: 'text', nullable: true })
  itens!: string;
  @ManyToOne(() => PlanoNutricional, (plano) => plano.refeicoes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'plano_id' })
  plano!: PlanoNutricional;
}
