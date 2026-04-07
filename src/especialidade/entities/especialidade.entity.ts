import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { NutricionistaEspecialidade } from '../../nutricionista_especialidade/entities/nutricionista_especialidade.entity';

@Entity('especialidade')
export class Especialidade {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({ type: 'varchar', length: 80, unique: true })
  nome!: string;
  @OneToMany(() => NutricionistaEspecialidade, (item) => item.especialidade)
  nutricionistas!: NutricionistaEspecialidade[];
}
