import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NutricionistaPerfil } from '../../nutricionista_perfil/entities/nutricionista_perfil.entity';
import { Paciente } from '../../paciente/entities/paciente.entity';

@Entity('pagamento')
export class Pagamento {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({ type: 'varchar', length: 36 })
  nutricionista_id!: string;
  @Column({ type: 'varchar', length: 36 })
  paciente_id!: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor!: number;
  @Column({ type: 'varchar', length: 30 })
  metodo!: string;
  @Column({ type: 'varchar', length: 30 })
  status!: string;
  @Column({ type: 'date' })
  data!: Date;
  @ManyToOne(() => NutricionistaPerfil, (perfil) => perfil.pagamentos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'nutricionista_id' })
  nutricionista!: NutricionistaPerfil;
  @ManyToOne(() => Paciente, (paciente) => paciente.pagamentos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'paciente_id' })
  paciente!: Paciente;
}
