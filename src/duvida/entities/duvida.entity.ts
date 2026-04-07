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
import { Resposta } from '../../resposta/entities/resposta.entity';

@Entity('duvida')
export class Duvida {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 36 })
  cliente_id!: string;

  @Column({ type: 'varchar', length: 36 })
  nutricionista_id!: string;

  @Column({ type: 'varchar', length: 150 })
  titulo!: string;

  @Column({ type: 'text' })
  descricao!: string;

  @Column({ type: 'varchar', length: 40 })
  status!: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  criado_em!: Date;
  
  @ManyToOne(
    (): typeof Paciente => Paciente,
    (paciente: Paciente) => paciente.duvidas,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'cliente_id' })
  cliente!: Paciente;
  @ManyToOne(
    (): typeof NutricionistaPerfil => NutricionistaPerfil,
    (perfil: NutricionistaPerfil) => perfil.duvidas_recebidas,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'nutricionista_id' })
  nutricionista!: NutricionistaPerfil;
  @OneToMany(
    (): typeof Resposta => Resposta,
    (resposta: Resposta) => resposta.duvida,
  )
  respostas!: Resposta[];
}
