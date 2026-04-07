import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Duvida } from '../../duvida/entities/duvida.entity';
import { NutricionistaPerfil } from '../../nutricionista_perfil/entities/nutricionista_perfil.entity';

@Entity('resposta')
export class Resposta {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({ type: 'varchar', length: 36 })
  duvida_id!: string;
  @Column({ type: 'varchar', length: 36 })
  nutricionista_id!: string;
  @Column({ type: 'text' })
  conteudo!: string;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  criado_em!: Date;
  @ManyToOne(() => Duvida, (duvida) => duvida.respostas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'duvida_id' })
  duvida!: Duvida;
  @ManyToOne(() => NutricionistaPerfil, (perfil) => perfil.respostas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'nutricionista_id' })
  nutricionista!: NutricionistaPerfil;
}
