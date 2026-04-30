import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { AvaliacaoAntropometricaModule } from '../avaliacao_antropometrica/avaliacao_antropometrica.module';
import { DuvidaModule } from '../duvida/duvida.module';
import { EspecialidadeModule } from '../especialidade/especialidade.module';
import { NutricionistaEspecialidadeModule } from '../nutricionista_especialidade/nutricionista_especialidade.module';
import { NutricionistaPerfilModule } from '../nutricionista_perfil/nutricionista_perfil.module';
import { PacienteModule } from '../paciente/paciente.module';
import { PagamentoModule } from '../pagamento/pagamento.module';
import { PlanoNutricionalModule } from '../plano_nutricional/plano_nutricional.module';
import { ReceitaPlanoModule } from '../receita_plano/receita_plano.module';
import { RespostaModule } from '../resposta/resposta.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { VinculoNutriPacienteModule } from '../vinculo_nutri_paciente/vinculo_nutri_paciente.module';
import { AvaliacaoAntropometrica } from '../avaliacao_antropometrica/entities/avaliacao_antropometrica.entity';
import { Duvida } from '../duvida/entities/duvida.entity';
import { Especialidade } from '../especialidade/entities/especialidade.entity';
import { NutricionistaEspecialidade } from '../nutricionista_especialidade/entities/nutricionista_especialidade.entity';
import { NutricionistaPerfil } from '../nutricionista_perfil/entities/nutricionista_perfil.entity';
import { Paciente } from '../paciente/entities/paciente.entity';
import { Pagamento } from '../pagamento/entities/pagamento.entity';
import { PlanoNutricional } from '../plano_nutricional/entities/plano_nutricional.entity';
import { ReceitaPlano } from '../receita_plano/entities/receita_plano.entity';
import { Resposta } from '../resposta/entities/resposta.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { VinculoNutriPaciente } from '../vinculo_nutri_paciente/entities/vinculo_nutri_paciente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nutri_responde',
      entities: [
        Usuario,
        NutricionistaPerfil,
        Paciente,
        Duvida,
        Resposta,
        Especialidade,
        NutricionistaEspecialidade,
        VinculoNutriPaciente,
        AvaliacaoAntropometrica,
        PlanoNutricional,
        ReceitaPlano,
        Pagamento,
      ],
      synchronize: true,
    }),
    AuthModule,
    UsuarioModule,
    NutricionistaPerfilModule,
    PacienteModule,
    DuvidaModule,
    RespostaModule,
    EspecialidadeModule,
    NutricionistaEspecialidadeModule,
    VinculoNutriPacienteModule,
    AvaliacaoAntropometricaModule,
    PlanoNutricionalModule,
    ReceitaPlanoModule,
    PagamentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
