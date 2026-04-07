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
import { NutricionistaEspecialidade } from '../../nutricionista_especialidade/entities/nutricionista_especialidade.entity';
import { Pagamento } from '../../pagamento/entities/pagamento.entity';
import { PlanoNutricional } from '../../plano_nutricional/entities/plano_nutricional.entity';
import { Resposta } from '../../resposta/entities/resposta.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { VinculoNutriPaciente } from '../../vinculo_nutri_paciente/entities/vinculo_nutri_paciente.entity';

@Entity('nutricionista_perfil')
export class NutricionistaPerfil {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({ type: 'varchar', length: 36 })
  usuario_id!: string;
  @Column({ type: 'varchar', length: 20, nullable: true })
  crn!: string;
  @Column({ type: 'text', nullable: true })
  bio!: string;
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  valor_consulta!: number;
  @Column({ type: 'varchar', length: 180, nullable: true })
  endereco!: string;
  @Column({ type: 'varchar', length: 80, nullable: true })
  cidade!: string;
  @Column({ type: 'float', nullable: true })
  latitude!: number;
  @Column({ type: 'float', nullable: true })
  longitude!: number;
  @Column({ type: 'float', nullable: true })
  avaliacao_media!: number;
  @OneToOne(() => Usuario, (usuario) => usuario.nutricionista_perfil, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario!: Usuario;
  @OneToMany(
    () => NutricionistaEspecialidade,
    (item) => item.nutricionista_perfil,
  )
  especialidades!: NutricionistaEspecialidade[];
  @OneToMany(
    () => VinculoNutriPaciente,
    (vinculo) => vinculo.nutricionista_perfil,
  )
  vinculos_pacientes!: VinculoNutriPaciente[];
  @OneToMany(
    () => AvaliacaoAntropometrica,
    (avaliacao) => avaliacao.nutricionista,
  )
  avaliacoes!: AvaliacaoAntropometrica[];
  @OneToMany(() => PlanoNutricional, (plano) => plano.nutricionista)
  planos_nutricionais!: PlanoNutricional[];
  @OneToMany(() => Pagamento, (pagamento) => pagamento.nutricionista)
  pagamentos!: Pagamento[];
  @OneToMany(() => Duvida, (duvida) => duvida.nutricionista)
  duvidas_recebidas!: Duvida[];
  @OneToMany(() => Resposta, (resposta) => resposta.nutricionista)
  respostas!: Resposta[];
}
