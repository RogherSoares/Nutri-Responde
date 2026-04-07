import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Especialidade } from '../../especialidade/entities/especialidade.entity';
import { NutricionistaPerfil } from '../../nutricionista_perfil/entities/nutricionista_perfil.entity';

@Entity('nutricionista_especialidade')
export class NutricionistaEspecialidade {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  nutricionista_perfil_id!: string;
  @PrimaryColumn({ type: 'varchar', length: 36 })
  especialidade_id!: string;
  @ManyToOne(() => NutricionistaPerfil, (perfil) => perfil.especialidades, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'nutricionista_perfil_id' })
  nutricionista_perfil!: NutricionistaPerfil;
  @ManyToOne(
    () => Especialidade,
    (especialidade) => especialidade.nutricionistas,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'especialidade_id' })
  especialidade!: Especialidade;
}
