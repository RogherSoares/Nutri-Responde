import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { NutricionistaPerfil } from '../../nutricionista_perfil/entities/nutricionista_perfil.entity';
import { Paciente } from '../../paciente/entities/paciente.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 120 })
  nome!: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 255 })
  senha_hash!: string;

  @Column({ type: 'varchar', length: 30 })
  tipo!: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  telefone!: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  criado_em!: Date;

  @OneToOne(() => NutricionistaPerfil, (perfil) => perfil.usuario)
  nutricionista_perfil!: NutricionistaPerfil;

  @OneToOne(() => Paciente, (paciente) => paciente.usuario)
  paciente!: Paciente;
}
