import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NutricionistaPerfil } from '../../nutricionista_perfil/entities/nutricionista_perfil.entity';
import { Paciente } from '../../paciente/entities/paciente.entity';
import { ReceitaPlano } from '../../receita_plano/entities/receita_plano.entity';

@Entity('plano_nutricional')
export class PlanoNutricional {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({ type: 'varchar', length: 36 })
  paciente_id!: string;
  @Column({ type: 'varchar', length: 36 })
  nutricionista_id!: string;
  @Column({ type: 'text', nullable: true })
  metas!: string;
  @Column({ type: 'text', nullable: true })
  observacoes!: string;
  @Column({ type: 'boolean', default: true })
  vigente!: boolean;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  criado_em!: Date;
  @ManyToOne(() => Paciente, (paciente) => paciente.planos_nutricionais, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'paciente_id' })
  paciente!: Paciente;
  @ManyToOne(
    () => NutricionistaPerfil,
    (perfil) => perfil.planos_nutricionais,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'nutricionista_id' })
  nutricionista!: NutricionistaPerfil;
  @OneToMany(() => ReceitaPlano, (refeicao) => refeicao.plano)
  refeicoes!: ReceitaPlano[];
}
