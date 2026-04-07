import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NutricionistaPerfil } from '../../nutricionista_perfil/entities/nutricionista_perfil.entity';
import { Paciente } from '../../paciente/entities/paciente.entity';

@Entity('vinculo_nutri_paciente')
export class VinculoNutriPaciente {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({ type: 'varchar', length: 36 })
  nutricionista_perfil_id!: string;
  @Column({ type: 'varchar', length: 36 })
  paciente_id!: string;
  @Column({ type: 'boolean', default: false })
  consentimento!: boolean;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  criado_em!: Date;
  @ManyToOne(() => NutricionistaPerfil, (perfil) => perfil.vinculos_pacientes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'nutricionista_perfil_id' })
  nutricionista_perfil!: NutricionistaPerfil;
  @ManyToOne(() => Paciente, (paciente) => paciente.vinculos_nutricionistas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'paciente_id' })
  paciente!: Paciente;
}
