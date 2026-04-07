import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AvaliacaoAntropometrica } from '../../avaliacao_antropometrica/entities/avaliacao_antropometrica.entity';
import { Duvida } from '../../duvida/entities/duvida.entity';
import { Pagamento } from '../../pagamento/entities/pagamento.entity';
import { PlanoNutricional } from '../../plano_nutricional/entities/plano_nutricional.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { VinculoNutriPaciente } from '../../vinculo_nutri_paciente/entities/vinculo_nutri_paciente.entity';

@Entity('paciente')
export class Paciente {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({ type: 'varchar', length: 36 })
  usuario_id!: string;
  @Column({ type: 'date', nullable: true })
  data_nascimento!: Date;
  @Column({ type: 'text', nullable: true })
  restricoes!: string;
  @Column({ type: 'text', nullable: true })
  alergias!: string;
  @Column({ type: 'text', nullable: true })
  objetivo!: string;
  @OneToOne(() => Usuario, (usuario) => usuario.paciente, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario!: Usuario;
  @OneToMany(() => Duvida, (duvida) => duvida.cliente)
  duvidas!: Duvida[];
  @OneToMany(() => AvaliacaoAntropometrica, (avaliacao) => avaliacao.paciente)
  avaliacoes!: AvaliacaoAntropometrica[];
  @OneToMany(() => PlanoNutricional, (plano) => plano.paciente)
  planos_nutricionais!: PlanoNutricional[];
  @OneToMany(() => Pagamento, (pagamento) => pagamento.paciente)
  pagamentos!: Pagamento[];
  @OneToMany(() => VinculoNutriPaciente, (vinculo) => vinculo.paciente)
  vinculos_nutricionistas!: VinculoNutriPaciente[];
}
