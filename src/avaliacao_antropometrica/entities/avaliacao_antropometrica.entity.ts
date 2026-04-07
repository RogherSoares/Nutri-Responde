import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NutricionistaPerfil } from '../../nutricionista_perfil/entities/nutricionista_perfil.entity';
import { Paciente } from '../../paciente/entities/paciente.entity';

@Entity('avaliacao_antropometrica')
export class AvaliacaoAntropometrica {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({ type: 'varchar', length: 36 })
  paciente_id!: string;
  @Column({ type: 'varchar', length: 36 })
  nutricionista_id!: string;
  @Column({ type: 'float' })
  peso_kg!: number;
  @Column({ type: 'float' })
  altura_m!: number;
  @Column({ type: 'float', nullable: true })
  imc!: number;
  @Column({ type: 'float', nullable: true })
  circ_abdominal_cm!: number;
  @Column({ type: 'text', nullable: true })
  observacoes!: string;
  @Column({ type: 'date' })
  data!: Date;
  @ManyToOne(() => Paciente, (paciente) => paciente.avaliacoes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'paciente_id' })
  paciente!: Paciente;
  @ManyToOne(() => NutricionistaPerfil, (perfil) => perfil.avaliacoes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'nutricionista_id' })
  nutricionista!: NutricionistaPerfil;
}
