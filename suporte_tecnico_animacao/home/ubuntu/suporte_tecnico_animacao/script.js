document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed"); // Debug: Check if DOMContentLoaded fires

    // Elementos da interface
    const inputProblema = document.getElementById("input-problema");
    const btnAnalisar = document.getElementById("btn-analisar");
    const resultadoAnalise = document.getElementById("resultado-analise");

    const inputBusca = document.getElementById("input-busca");
    const btnBuscar = document.getElementById("btn-buscar");
    const resultadoBusca = document.getElementById("resultado-busca");

    const btnFaq = document.getElementById("btn-faq");
    const btnWorkflows = document.getElementById("btn-workflows");
    const conteudoFaq = document.getElementById("conteudo-faq");
    const conteudoWorkflows = document.getElementById("conteudo-workflows");

    // Debug: Check if elements are found
    if (!btnAnalisar) console.error("Button 'btn-analisar' not found!");
    if (!resultadoAnalise) console.error("Div 'resultado-analise' not found!");
    if (!btnBuscar) console.error("Button 'btn-buscar' not found!");
    if (!resultadoBusca) console.error("Div 'resultado-busca' not found!");

    // --- Base de Conhecimento Detalhada ---
    const baseConhecimento = {
        problemas: [
            {
                keywords: ["rig", "skin", "deform", "peso", "joint", "bind", "controlador", "constraint"],
                setor: "Rigging",
                causas: [
                    "Problema no skinning (pesos incorretos ou faltando).",
                    "Joints mal posicionados ou com orientação errada.",
                    "Setup de rig muito complexo ou com dependências circulares.",
                    "Ordem de deformadores incorreta no histórico do Maya.",
                    "Geometria com topologia inadequada para deformação.",
                    "Constraints configuradas incorretamente."
                ],
                solucoes: [
                    "Verifique o histórico de deformação no Maya (delete non-deformer history).",
                    "Revise e ajuste os pesos do skin usando o Paint Skin Weights Tool.",
                    "Confira a hierarquia e orientação dos joints.",
                    "Isole o problema: teste a deformação em uma cena limpa.",
                    "Considere usar deformadores adicionais (blend shapes, wire, etc.).",
                    "Revise as constraints aplicadas nos controladores."
                ],
                contato: { nome: "João Silva", funcao: "Supervisor de Rigging" }
            },
            {
                keywords: ["yeti", "groom", "pelo", "cabelo", "cache", "fibra", "fur", "pgYetiMaya"],
                setor: "Grooming",
                causas: [
                    "Cache do Yeti corrompido ou desatualizado.",
                    "Problema na licença do Yeti (não encontrada ou expirada).",
                    "Conflito de nós do Yeti na cena do Maya.",
                    "Parâmetros do groom incorretos (densidade, comprimento, clumping).",
                    "Problemas de memória ao gerar ou ler o cache.",
                    "Geometria base sem UVs ou com UVs sobrepostos.",
                    "Plugin pgYetiMaya não carregado."
                ],
                solucoes: [
                    "Limpe o cache do Yeti (delete os arquivos de cache ou use a opção no nó).",
                    "Verifique a validade e disponibilidade da licença do Yeti.",
                    "Isole o nó do Yeti para teste em uma cena separada.",
                    "Revise os atributos do nó Yeti (Groom, Texture, Scatter, etc.).",
                    "Aumente o limite de memória do Maya, se necessário.",
                    "Verifique se o caminho para o cache está correto e acessível.",
                    "Certifique-se que a geometria base possui UVs adequados.",
                    "Verifique se o plugin do Yeti está carregado no Plug-in Manager."
                ],
                contato: { nome: "Maria Oliveira", funcao: "Líder de Grooming" }
            },
            {
                keywords: ["arnold", "render", "luz", "lighting", "preto", "ruído", "noise", "shader", "textura", "aov", "licença", "mtoa", "sampling", "ray depth"],
                setor: "Lighting/Render",
                causas: [
                    "Licença do Arnold expirada, não encontrada ou servidor inacessível.",
                    "Configurações de render incorretas (sampling baixo/alto, ray depth insuficiente).",
                    "Shaders quebrados, incompatíveis ou com parâmetros errados.",
                    "Problema de path/caminho para texturas ou outros assets.",
                    "Luzes desligadas, com intensidade zero ou obstruídas.",
                    "Câmera com configurações de exposição erradas ou obstruída.",
                    "Memória insuficiente para o render.",
                    "Problemas com AOVs (nomes duplicados, drivers incorretos).",
                    "Plugin MtoA (Maya to Arnold) não carregado ou versão incorreta.",
                    "Objeto sem 'Primary Visibility' habilitado nos Arnold Attributes."
                ],
                solucoes: [
                    "Verifique o status da licença do Arnold (Arnold License Manager ou variável de ambiente).",
                    "Revise as configurações de render no Render Settings (sampling, ray depth). Comece com presets padrão.",
                    "Confira os materiais aplicados nos objetos (use o Hypershade).",
                    "Verifique os caminhos das texturas (File Path Editor).",
                    "Certifique-se que as luzes estão visíveis, ligadas e com intensidade adequada.",
                    "Verifique as configurações da câmera (exposure, physical camera attributes).",
                    "Otimize a cena (reduza polígonos, use instâncias, otimize texturas).",
                    "Monitore o uso de memória durante o render.",
                    "Verifique as configurações dos AOVs.",
                    "Certifique-se que o plugin MtoA está carregado (Plug-in Manager) e na versão correta.",
                    "Verifique os Arnold Attributes do objeto (Shape node)."
                ],
                contato: { nome: "Carlos Pereira", funcao: "Supervisor de Lighting" }
            },
             {
                keywords: ["animação", "playblast", "graph editor", "curve", "keyframe", "controlador", "playback", "velocidade", "referencia", "reference"],
                setor: "Animação",
                causas: [
                    "Curvas de animação quebradas ou com tangentes erradas no Graph Editor.",
                    "Controladores do rig não respondendo ou com comportamento inesperado.",
                    "Problemas na visualização do Playblast (viewport 2.0, codec, escala de tempo).",
                    "Constraints configuradas incorretamente.",
                    "Referências de cena desatualizadas ou corrompidas.",
                    "Playback speed incorreta nas preferências do Maya.",
                    "Problemas com time warps ou caches de animação."
                ],
                solucoes: [
                    "Verifique e limpe as curvas no Graph Editor (Euler filter, simplify curve).",
                    "Certifique-se que está usando a última versão do rig.",
                    "Teste diferentes configurações de Playblast (codec, display options, scale, quality).",
                    "Revise as constraints aplicadas nos controladores.",
                    "Atualize ou substitua as referências de cena no Reference Editor.",
                    "Verifique as configurações de Time Slider (Playback speed, frame rate).",
                    "Reinicie o Maya ou limpe as preferências."
                ],
                contato: { nome: "Beatriz Lima", funcao: "Supervisora de Animação" }
            },
            {
                keywords: ["pipeline", "script", "ferramenta", "path", "caminho", "versão", "publicar", "publish", "shotgrid", "ftrack", "permissão", "ambiente", "env var", "ti"],
                setor: "Pipeline/TI",
                causas: [
                    "Variáveis de ambiente não configuradas corretamente.",
                    "Versão incorreta de software, plugin ou script.",
                    "Problemas de permissão de escrita/leitura em pastas da rede.",
                    "Erro em script customizado da pipeline (traceback no Script Editor).",
                    "Problemas de conexão com Shotgrid/Ftrack ou outro software de gerenciamento.",
                    "Conflito entre scripts ou plugins.",
                    "Caminho de projeto (Project Path) não definido corretamente no Maya."
                ],
                solucoes: [
                    "Verifique se todas as variáveis de ambiente necessárias estão setadas (consulte a documentação da pipeline).",
                    "Confirme se está usando as versões corretas dos softwares e scripts (consulte a coordenação ou pipeline).",
                    "Contate a equipe de TI para verificar permissões de rede.",
                    "Copie o erro completo do Script Editor e reporte para a equipe de Pipeline.",
                    "Verifique sua conexão de rede e o status dos serviços de gerenciamento.",
                    "Tente desabilitar scripts/plugins não essenciais para isolar conflitos.",
                    "Use `File > Set Project` para definir o caminho correto do projeto."
                ],
                contato: { nome: "Pedro Santos", funcao: "Pipeline TD" }
            }
        ],
        faq: {
            "Geral": [
                { pergunta: "Como limpar as preferências do Maya?", resposta: "Feche o Maya. Navegue até a pasta `Documentos/maya/` (Windows) ou `~/Library/Preferences/Autodesk/maya/` (macOS) ou `~/maya/` (Linux). Renomeie a pasta da sua versão (ex: `2023` para `2023_old`). Ao reiniciar o Maya, ele criará uma pasta de preferências nova. Cuidado: isso reseta todas as suas customizações." },
                { pergunta: "Onde encontro os arquivos de projeto?", resposta: "Normalmente, os projetos ficam armazenados em um servidor central, seguindo uma estrutura padrão definida pela pipeline. Verifique a documentação do projeto ou consulte o seu supervisor/coordenador. Exemplo comum: `P:/Projetos/[Nome_Projeto]/Producao/...`" },
                { pergunta: "Como reportar um bug em uma ferramenta interna?", resposta: "Utilize o sistema de tickets do estúdio (Jira, Ftrack, Shotgrid, etc.) ou envie um email detalhado para a equipe de Pipeline (pipeline@estudio.com). Inclua: <br>1. Nome da ferramenta e versão.<br>2. Passos exatos para reproduzir o erro.<br>3. Mensagem de erro completa (copie do Script Editor).<br>4. Screenshots ou vídeo, se possível.<br>5. O arquivo ou shot onde o erro ocorreu." },
                { pergunta: "Maya está lento ou travando, o que fazer?", resposta: "1. Salve seu trabalho frequentemente!<br>2. Limpe o histórico (Edit > Delete by Type > History).<br>3. Feche outras aplicações pesadas.<br>4. Verifique o uso de memória.<br>5. Tente reiniciar o Maya.<br>6. Limpe as preferências (veja FAQ acima).<br>7. Atualize drivers da placa de vídeo.<br>8. Se persistir, reporte à Pipeline/TI." }
            ],
            "Animação": [
                { pergunta: "Meu Playblast está saindo com baixa qualidade, como melhorar?", resposta: "Nas opções do Playblast (`Window > Playblast > Opções []`), aumente a `Quality` para 100 e o `Scale` para 1.0. Certifique-se que o formato selecionado (ex: `qt`, `avi`) e o `Encoding` (ex: `H.264`) são adequados. Desligar elementos visuais desnecessários no viewport (como NURBS curves, locators) também pode ajudar. Verifique se `Show Ornaments` está desligado se não precisar das informações de HUD." },
                { pergunta: "Como copiar animação entre personagens similares?", resposta: "Se os rigs tiverem a mesma estrutura e nomes de controladores, você pode usar:<br>1. `ATom (Animation Transfer Object Model)`: Ferramenta nativa do Maya para exportar/importar animação. <br>2. `Studio Library`: Plugin popular (se instalado no estúdio). <br>3. Scripts customizados da pipeline (verifique com o supervisor). <br>Para rigs diferentes, pode ser necessário retargeting (ex: HumanIK) ou ajuste manual." },
                { pergunta: "O controlador do personagem não se move, o que pode ser?", resposta: "1. Verifique se o canal no Channel Box está bloqueado (cinza) ou conectado (amarelo/laranja).<br>2. Verifique se há constraints ativas no controlador.<br>3. Certifique-se que o layer de animação correto está selecionado e não está bloqueado.<br>4. Pode ser um problema no rig, reporte ao departamento de Rigging." }
            ],
            "Rigging": [
                { pergunta: "Posso adicionar um controlador extra ao rig publicado?", resposta: "Não diretamente no arquivo de rig referenciado na sua cena de animação. Solicite a adição à equipe de Rigging. Modificar rigs publicados localmente pode quebrar a compatibilidade com a animação existente, outras ferramentas da pipeline e atualizações futuras do rig." },
                { pergunta: "A deformação está estranha em uma parte específica, o que fazer?", resposta: "Primeiro, verifique os pesos de skin na área afetada usando o `Paint Skin Weights Tool`. Use `Smooth` para suavizar transições. Se não resolver, pode ser um problema na topologia do modelo (consulte Modelagem) ou na posição/orientação dos joints (consulte Rigging). Comunique o problema ao seu supervisor e/ou ao supervisor de Rigging." },
                { pergunta: "Como atualizar para uma nova versão do rig na minha cena?", resposta: "Use o `Reference Editor` (`File > Reference Editor`). Selecione a referência do rig antigo. Vá em `Reference > Replace Reference...` e aponte para o arquivo da nova versão do rig publicado. Salve sua cena após a atualização." }
            ],
            "Grooming (Yeti)": [
                { pergunta: "Como otimizar um groom pesado para o render?", resposta: "1. Reduza a `Density` nas áreas menos visíveis ou mais distantes da câmera.<br>2. Use o atributo `Render Density Multiplier` no nó do Yeti para diminuir a densidade apenas no render.<br>3. Aumente o `Width` das fibras para compensar a menor densidade, se necessário.<br>4. Otimize as texturas usadas para controlar os atributos.<br>5. Verifique se o `Scatter` node está gerando mais pontos que o necessário.<br>6. Use LODs (Levels of Detail) se a pipeline suportar." },
                { pergunta: "O groom não aparece no render, por quê?", resposta: "1. Verifique se o nó do Yeti está conectado corretamente ao shader do objeto base.<br>2. Certifique-se que a visibilidade para render (`Render Stats > Primary Visibility`, etc.) está habilitada para o objeto base.<br>3. No nó do Yeti, verifique se a opção `Bypass` não está ativa.<br>4. Verifique se a licença do Yeti está ativa e sendo encontrada pelo Arnold/Maya.<br>5. Certifique-se que o plugin `pgYetiMaya` está carregado."
                },
                { pergunta: "Onde o Yeti salva os arquivos de cache?", resposta: "Normalmente, o caminho é definido no atributo `Cache File Name` do nó do Yeti. Por padrão, ele pode salvar em uma pasta `cache/yeti` dentro do diretório do seu projeto Maya (`workspace`). Verifique o caminho completo no atributo para ter certeza. A pipeline do estúdio pode definir um local padrão diferente." }
            ],
            "Lighting/Render (Arnold)": [
                { pergunta: "Meu render está muito granulado (noise), como corrigir?", resposta: "O ruído geralmente vem de samples insuficientes. Aumente os samples:<br>1. **Global (Camera AA):** Aumenta a qualidade geral e afeta todos os outros samples. É o principal controle.<br>2. **Específicos (Diffuse, Specular, Transmission, SSS, Volume Indirect):** Aumente apenas os samples do tipo de raio que está causando o ruído. Ex: Se o reflexo está ruidoso, aumente `Specular` samples.<br>3. **Luzes:** Aumente os `Samples` nas configurações de cada luz Arnold.<br>4. **Denoiser:** Use o Arnold Denoiser (OptiX para Nvidia, OIDN para CPU/outras GPUs) como passe final (AOV `denoise_albedo`, `denoise_normal`) ou na pós-produção." },
                { pergunta: "Como configurar AOVs (Render Passes)?", resposta: "Vá para a aba `AOVs` nas `Render Settings` do Arnold.<br>1. Selecione os AOVs desejados (ex: `N` (Normal), `Z` (Depth), `direct_diffuse`, `indirect_specular`, `motionvector`) na lista `Available AOVs` e mova-os para `Active AOVs` usando o botão `>`.",
                { pergunta: "Onde configurar o servidor de licenças do Arnold?", resposta: "Normalmente, isso é feito através de uma variável de ambiente configurada pela pipeline/TI. As variáveis comuns são `ADSKFLEX_LICENSE_FILE` ou `ARNOLD_LICENSE_MANAGER`. O valor geralmente é `PORTA@IP_DO_SERVIDOR` (ex: `27000@192.168.1.100`). Se o render falhar com erro de licença, contate a TI/Pipeline para verificar se a variável está correta e o servidor acessível." }
            ]
        },
        workflows: [
            {
                titulo: "Workflow: Animação -> Lighting",
                descricao: "1. <strong>Finalização da Animação:</strong> O animador finaliza a animação do shot, garantindo que todos os personagens e props estejam animados conforme a direção e que o timing esteja aprovado.<br>2. <strong>Limpeza da Cena:</strong> O animador remove nodes desnecessários, layers de animação não utilizados e garante que apenas os elementos corretos (geometria final cacheada/referenciada, câmeras aprovadas) estejam presentes e visíveis.<br>3. <strong>Publicação da Animação (via Pipeline):</strong> O animador utiliza a ferramenta de publicação da pipeline. Isso geralmente envolve:<br>   - Gerar/Exportar um Alembic (.abc) cache da geometria animada.<br>   - Exportar a câmera animada (geralmente como .fbx ou .abc).<br>   - Registrar a publicação no sistema de gerenciamento (Shotgrid/Ftrack), atualizando o status do shot.<br>4. <strong>Notificação Automática:</strong> O sistema de gerenciamento notifica o departamento de Lighting que a animação do shot está pronta para ser iniciada.<br>5. <strong>Importação/Referência no Lighting:</strong> O artista de Lighting cria uma nova cena de lighting e importa/referencia os arquivos publicados pela Animação (cache Alembic, câmera).<br>6. <strong>Setup de Luz e Render:</strong> O artista de Lighting configura as luzes, aplica shaders (se não vierem do lookdev), ajusta configurações de render e começa a gerar os primeiros renders para aprovação."
            },
            {
                titulo: "Workflow: Ajuste de Rig Durante a Animação",
                descricao: "1. <strong>Identificação do Problema:</strong> O animador identifica um problema no rig que impede a animação desejada (ex: deformação ruim, falta de controle, bug).<br>2. <strong>Comunicação Imediata:</strong> O animador comunica o problema ao Supervisor de Animação e ao Supervisor de Rigging, idealmente através do sistema de gerenciamento (criando uma nota ou task), detalhando o problema, o shot afetado e fornecendo exemplos (playblast, cena).<br>3. <strong>Análise pelo Rigging:</strong> A equipe de Rigging analisa o problema, reproduz o erro e determina a viabilidade e o impacto da correção.<br>4. <strong>Correção e Teste:</strong> O rig é corrigido em uma nova versão interna pela equipe de Rigging.<br>5. <strong>Publicação da Nova Versão do Rig (via Pipeline):</strong> A nova versão corrigida do rig é publicada na pipeline, tornando-a disponível para os outros departamentos.<br>6. <strong>Atualização na Cena de Animação:</strong> O animador utiliza o `Reference Editor` para atualizar a referência do rig em sua cena de animação para a nova versão publicada.<br>7. <strong>Verificação e Continuação:</strong> O animador verifica se o problema foi resolvido e continua a animação. Se o problema persistir, o ciclo de comunicação recomeça."
            },
            {
                titulo: "Organização de Arquivos e Versionamento",
                descricao: "1. <strong>Estrutura de Pastas Padrão:</strong> Siga rigorosamente a estrutura de pastas definida pela pipeline do projeto. Qualquer desvio pode quebrar ferramentas automáticas e dificultar a localização de arquivos. Ex: `.../[Sequencia]/[Shot]/[Departamento]/work/maya/scenes/`.<br>2. <strong>Nomenclatura de Arquivos:</strong> Utilize a convenção de nomenclatura padrão para arquivos, definida pela pipeline. Isso é crucial para scripts e organização. Ex: `[Projeto]_[Seq]_[Shot]_[Dept]_[Descricao]_[Versao].ma` (Ex: `XYZ_SQ010_SH020_anim_blocking_v003.ma`).<br>3. <strong>Versionamento Incremental:</strong> Salve novas versões frequentemente usando `File > Increment and Save` (Ctrl+Alt+S) ou salvando manualmente com um número de versão incrementado (v001, v002, ...). Nunca trabalhe sobre a versão anterior sem salvar uma nova. Use os comentários de versão no sistema de gerenciamento ou no próprio nome do arquivo (se permitido) para descrever as mudanças importantes.<br>4. <strong>Arquivos de Trabalho vs. Publicados:</strong> Mantenha seus arquivos de trabalho (`work`) separados dos arquivos finais publicados (`publish`). Arquivos na pasta `publish` são geralmente gerados pelas ferramentas da pipeline e não devem ser editados manualmente. Eles são a fonte de dados para os departamentos seguintes.<br>5. <strong>Limpeza Regular:</strong> Delete versões antigas e arquivos de teste desnecessários da sua pasta `work` periodicamente para economizar espaço e manter a organização." }
            ]
        },
        // A busca rápida usa um mapeamento direto de keywords para respostas HTML pré-formatadas
        busca: {
            "render preto": "<p><strong>Render Preto:</strong> Causas comuns: <br>1. Licença do Arnold inválida/não encontrada (verifique Arnold License Manager ou logs). <br>2. Luzes desligadas, intensidade zero, bloqueadas ou muito distantes. <br>3. Câmera obstruída, dentro de um objeto ou com exposição muito baixa/incorreta. <br>4. Shader padrão (lambert1) aplicado acidentalmente a objetos importantes. <br>5. Objeto com `Primary Visibility` desligado nos Arnold Attributes (Shape node). <br>6. Problema no shader asignado (ex: erro de textura, parâmetro inválido). <br>7. Alpha/transparência incorreta cortando o objeto. <br>Verifique esses itens. Veja também a análise de problemas para Lighting/Render.</p>",
            "cache yeti": "<p><strong>Cache do Yeti:</strong> Problemas com cache podem causar instabilidade, visuais incorretos ou falha na geração/leitura. <br>1. <strong>Limpar:</strong> Tente limpar o cache existente (botão `Delete Cache` no nó Yeti ou deletando arquivos manualmente na pasta definida em `Cache File Name`). <br>2. <strong>Gerar:</strong> Se o problema for gerar o cache, verifique: espaço em disco suficiente, permissões de escrita na pasta de destino, se a geometria base tem UVs válidos e não sobrepostos, se não há erros no grafo do Yeti (vermelho no node editor). <br>3. <strong>Ler:</strong> Se o problema for ler o cache, verifique se o caminho em `Cache File Name` está correto e acessível, e se o arquivo de cache não está corrompido. <br>4. <strong>Versão:</strong> Certifique-se que a versão do Yeti usada para gerar o cache é compatível com a versão usada para ler.</p>",
            "cache do yeti": "<p><strong>Cache do Yeti:</strong> Problemas com cache podem causar instabilidade, visuais incorretos ou falha na geração/leitura. <br>1. <strong>Limpar:</strong> Tente limpar o cache existente (botão `Delete Cache` no nó Yeti ou deletando arquivos manualmente na pasta definida em `Cache File Name`). <br>2. <strong>Gerar:</strong> Se o problema for gerar o cache, verifique: espaço em disco suficiente, permissões de escrita na pasta de destino, se a geometria base tem UVs válidos e não sobrepostos, se não há erros no grafo do Yeti (vermelho no node editor). <br>3. <strong>Ler:</strong> Se o problema for ler o cache, verifique se o caminho em `Cache File Name` está correto e acessível, e se o arquivo de cache não está corrompido. <br>4. <strong>Versão:</strong> Certifique-se que a versão do Yeti usada para gerar o cache é compatível com a versão usada para ler.</p>",
            "arnold license": "<p><strong>Licença Arnold:</strong> <br>1. <strong>Verificar Status:</strong> Use o `Arnold License Manager` (disponível no menu Arnold > Licensing) ou verifique os logs de render no Script Editor/console para mensagens de erro de licença (ex: `Failed to checkout license`, `watermarked render`). <br>2. <strong>Servidor:</strong> Verifique a variável de ambiente (`ADSKFLEX_LICENSE_FILE` ou `ARNOLD_LICENSE_MANAGER`) que aponta para o servidor (`PORTA@IP_SERVIDOR`). Confirme com TI/Pipeline se o endereço está correto e se o servidor está online e acessível da sua máquina. <br>3. <strong>Expirada/Não encontrada:</strong> O render pode falhar completamente, exibir marcas d'água (watermarks) ou rodar muito lentamente (usando apenas a CPU). <br>4. <strong>Contato:</strong> Contate o setor de Pipeline/TI para verificar o status do servidor e a validade das licenças. <br><strong>Contato TI/Pipeline:</strong> Pedro Santos (Pipeline TD)</p>",
            "licença arnold": "<p><strong>Licença Arnold:</strong> <br>1. <strong>Verificar Status:</strong> Use o `Arnold License Manager` (disponível no menu Arnold > Licensing) ou verifique os logs de render no Script Editor/console para mensagens de erro de licença (ex: `Failed to checkout license`, `watermarked render`). <br>2. <strong>Servidor:</strong> Verifique a variável de ambiente (`ADSKFLEX_LICENSE_FILE` ou `ARNOLD_LICENSE_MANAGER`) que aponta para o servidor (`PORTA@IP_SERVIDOR`). Confirme com TI/Pipeline se o endereço está correto e se o servidor está online e acessível da sua máquina. <br>3. <strong>Expirada/Não encontrada:</strong> O render pode falhar completamente, exibir marcas d'água (watermarks) ou rodar muito lentamente (usando apenas a CPU). <br>4. <strong>Contato:</strong> Contate o setor de Pipeline/TI para verificar o status do servidor e a validade das licenças. <br><strong>Contato TI/Pipeline:</strong> Pedro Santos (Pipeline TD)</p>",
            "maya crash": "<p><strong>Maya Crashando (Fechando Inesperadamente):</strong> <br>1. <strong>Salvar Backup:</strong> Se possível, ative o Auto-Save nas preferências (`Settings/Preferences > Preferences > Files/Projects > Auto Save`). <br>2. <strong>Preferências Corrompidas:</strong> Causa comum. Tente limpar/renomear a pasta de preferências (veja FAQ Geral). <br>3. <strong>Placa de Vídeo:</strong> Atualize os drivers da sua placa de vídeo para a versão recomendada/certificada pela Autodesk. <br>4. <strong>Memória Insuficiente:</strong> Monitore o uso de RAM. Cenas muito pesadas ou operações complexas podem esgotar a memória. Feche outros programas. <br>5. <strong>Plugins/Scripts:</strong> Desabilite plugins de terceiros ou scripts customizados recentes para testar se algum deles está causando o problema (Plug-in Manager). <br>6. <strong>Arquivo Corrompido:</strong> Tente importar (`File > Import...`) a cena para uma cena nova em vez de abri-la diretamente (`File > Open`). <br>7. <strong>Reportar:</strong> Se o crash for consistente e reproduzível, reporte para a Pipeline/TI com o `MayaCrashLog.log` (geralmente salvo na pasta Temp do sistema ou na pasta de preferências do Maya) e os passos para reproduzir.</p>",
            "playblast lento": "<p><strong>Playblast Lento:</strong> <br>1. <strong>Viewport 2.0 Settings:</strong> Reduza a qualidade de anti-aliasing (`Multisampling Anti-aliasing`), desligue `Screen-space Ambient Occlusion` e `Motion Blur` no painel de configurações do Viewport 2.0 (`Renderer > Viewport 2.0 > Opções []`). <br>2. <strong>Ocultar Elementos:</strong> Use layers de display ou selecione e oculte (Ctrl+H) geometria pesada, rigs complexos, cabelos/simulações ou outros elementos não essenciais para a visualização da animação que está sendo avaliada. <br>3. <strong>Codec/Formato:</strong> Experimente diferentes codecs e formatos nas opções do Playblast. `H.264` em `MP4` ou `MOV` costuma ser rápido. Evite formatos não comprimidos se não for necessário. <br>4. <strong>Resolução/Escala:</strong> Reduza a `Scale` nas opções do Playblast (ex: 0.5 para metade da resolução). <br>5. <strong>Hardware:</strong> Verifique se sua CPU e principalmente sua placa de vídeo (GPU) estão atendendo aos requisitos recomendados para a sua versão do Maya.</p>",
            "salvar arquivo": "<p><strong>Salvar Arquivo no Maya:</strong> <br>1. <strong>Salvar (Save Scene):</strong> `File > Save Scene` ou `Ctrl+S`. Salva as alterações sobre o arquivo atualmente aberto. Use com cuidado para não sobrescrever trabalho importante. <br>2. <strong>Salvar Como (Save Scene As):</strong> `File > Save Scene As...` ou `Ctrl+Shift+S`. Permite salvar o estado atual da cena em um novo arquivo, com um novo nome ou localização. Ideal para criar versões ou backups. <br>3. <strong>Incrementar e Salvar (Increment and Save):</strong> `File > Increment and Save` ou `Ctrl+Alt+S`. Salva automaticamente uma nova versão do arquivo atual, incrementando o número no final do nome (ex: `arquivo_v001.ma` -> `arquivo_v002.ma`). Muito útil para versionamento rápido. <br><strong>Importante:</strong> Sempre siga a nomenclatura e estrutura de pastas definidas pela pipeline do estúdio!</p>",
            "abrir arquivo": "<p><strong>Abrir Arquivo no Maya:</strong> <br>1. <strong>Abrir Cena (Open Scene):</strong> `File > Open Scene...` ou `Ctrl+O`. Abre um arquivo `.ma` ou `.mb`. Descarta a cena atual se não for salva. <br>2. <strong>Importar (Import):</strong> `File > Import...`. Adiciona o conteúdo de um arquivo (Maya, FBX, OBJ, Alembic, etc.) à cena atualmente aberta. Útil para combinar elementos ou tentar recuperar arquivos corrompidos. <br>3. <strong>Referências (Reference Editor):</strong> `File > Reference Editor`. Permite carregar outras cenas dentro da sua cena atual como referências. É a forma padrão de trabalhar com assets como Rigs, Cenários, Props na maioria das pipelines, pois permite atualizações fáceis. <br>4. <strong>Arquivo Recente (Recent Files):</strong> `File > Recent Files`. Acesso rápido aos últimos arquivos abertos." }
        }
    };

    // --- Funções Principais Atualizadas ---

    function analisarProblema(textoProblema) {
        resultadoAnalise.innerHTML = ""; // Limpa resultados anteriores
        textoProblema = textoProblema.toLowerCase().trim();

        if (!textoProblema) {
            resultadoAnalise.innerHTML = "<p>Por favor, descreva seu problema no campo acima.</p>";
            return;
        }

        let melhorMatch = null;
        let maxKeywordsMatch = 0;
        const palavrasInput = textoProblema.split(/\s+/); // Divide a entrada em palavras

        baseConhecimento.problemas.forEach(problema => {
            let currentMatch = 0;
            problema.keywords.forEach(kw => {
                // Verifica se a keyword (ou parte dela) está presente no input
                if (textoProblema.includes(kw)) {
                    // Pondera keywords mais longas um pouco mais
                    currentMatch += (kw.length > 4) ? 1.1 : 1;
                }
            });

            // Considera um match melhor se tiver mais keywords ou a mesma quantidade mas com score maior (devido à ponderação)
            if (currentMatch > maxKeywordsMatch) {
                maxKeywordsMatch = currentMatch;
                melhorMatch = problema;
            }
        });

        if (melhorMatch && maxKeywordsMatch > 0) { // Exige pelo menos uma keyword correspondente
            let htmlResultado = `<p><strong>Setor Provável:</strong> ${melhorMatch.setor}</p>`;
            htmlResultado += "<p><strong>Possíveis Causas:</strong></p><ul>";
            melhorMatch.causas.forEach(causa => htmlResultado += `<li>${causa}</li>`);
            htmlResultado += "</ul>";
            htmlResultado += "<p><strong>Sugestões / O que verificar:</strong></p><ul>";
            melhorMatch.solucoes.forEach(solucao => htmlResultado += `<li>${solucao}</li>`);
            htmlResultado += "</ul>";
            if (melhorMatch.contato && melhorMatch.contato.nome) {
                htmlResultado += `<p><strong>Se o problema persistir, contate:</strong> ${melhorMatch.contato.nome} (${melhorMatch.contato.funcao})</p>`;
            }
            resultadoAnalise.innerHTML = htmlResultado;
        } else {
            resultadoAnalise.innerHTML = `
                <p>Não consegui identificar um problema específico correspondente na base de conhecimento com base na sua descrição.</p>
                <p><strong>Sugestões:</strong></p>
                <ul>
                    <li>Tente reformular a pergunta usando termos mais técnicos e específicos (ex: "arnold render noise", "yeti cache error", "rig skin deform", "maya crash ao salvar").</li>
                    <li>Use a Busca Rápida acima com palavras-chave diretas (ex: "licença arnold", "playblast lento").</li>
                    <li>Consulte as seções de Dúvidas Frequentes ou Fluxos de Trabalho.</li>
                </ul>
                <p><strong>Se o problema for complexo, urgente ou não encontrar ajuda aqui:</strong> Contate diretamente o supervisor do seu departamento, a Coordenação de Produção ou o Pipeline TD.</p>
                <p><strong>Contatos Principais:</strong> Ana Souza (Coordenadora de Produção), Pedro Santos (Pipeline TD)</p>
            `;
        }
    }

    function buscarTermo(termoBusca) {
        resultadoBusca.innerHTML = ""; // Limpa resultados anteriores
        termoBusca = termoBusca.toLowerCase().trim();

        if (!termoBusca) {
            resultadoBusca.innerHTML = "<p>Por favor, digite um termo para buscar.</p>";
            return;
        }

        // Busca direta na base de conhecimento 'busca'
        const resposta = baseConhecimento.busca[termoBusca];

        if (resposta) {
            resultadoBusca.innerHTML = resposta;
        } else {
            // Tentativa de busca parcial (experimental)
            let respostasParciais = [];
            for (const key in baseConhecimento.busca) {
                if (key.includes(termoBusca)) {
                    respostasParciais.push(`<div><strong>Termo relacionado: ${key}</strong>${baseConhecimento.busca[key]}</div>`);
                }
            }
            if(respostasParciais.length > 0){
                 resultadoBusca.innerHTML = `<p>Nenhuma correspondência exata encontrada para "${termoBusca}". Resultados relacionados:</p>${respostasParciais.join('<hr>')}`;
            } else {
                 resultadoBusca.innerHTML = `<p>Nenhuma informação rápida encontrada para "${termoBusca}". Tente palavras-chave diferentes ou consulte a análise de problemas, FAQ ou Workflows.</p>`;
            }
        }
    }

    function carregarFaq() {
        let htmlFaq = "<h2>Dúvidas Frequentes</h2>";
        for (const setor in baseConhecimento.faq) {
            htmlFaq += `<h3>${setor}</h3><dl>`; // Usando <dl> para lista de definição
            baseConhecimento.faq[setor].forEach(item => {
                htmlFaq += `<dt>${item.pergunta}</dt><dd>${item.resposta}</dd>`;
            });
            htmlFaq += `</dl>`;
        }
        conteudoFaq.innerHTML = htmlFaq;
    }

    function carregarWorkflows() {
        let htmlWorkflows = "<h2>Fluxos de Trabalho</h2>";
        baseConhecimento.workflows.forEach(item => {
            htmlWorkflows += `<div><h3>${item.titulo}</h3><p>${item.descricao}</p></div><hr>`;
        });
        conteudoWorkflows.innerHTML = htmlWorkflows;
    }

    function mostrarConteudo(elementoMostrar, btnAtivo) {
        // Esconde todos os conteúdos auxiliares
        conteudoFaq.classList.add("conteudo-oculto");
        conteudoWorkflows.classList.add("conteudo-oculto");

        // Remove destaque de botões inativos (reseta para cor padrão)
        btnFaq.style.backgroundColor = "";
        btnWorkflows.style.backgroundColor = "";

        // Mostra o conteúdo selecionado e destaca o botão
        if (elementoMostrar) {
            // Verifica se o conteúdo já está carregado, senão carrega
            if (elementoMostrar === conteudoFaq && conteudoFaq.innerHTML.includes("carregado aqui dinamicamente")) {
                carregarFaq();
            }
            if (elementoMostrar === conteudoWorkflows && conteudoWorkflows.innerHTML.includes("carregada aqui")) {
                carregarWorkflows();
            }

            elementoMostrar.classList.remove("conteudo-oculto");
            if(btnAtivo) btnAtivo.style.backgroundColor = "#4a6a8a"; // Cor de ativo/hover
        } else {
             // Se nada for mostrado, garante que os botões voltem ao normal
             btnFaq.style.backgroundColor = "";
             btnWorkflows.style.backgroundColor = "";
        }
    }

    // --- Event Listeners ---

    // Botão Analisar Problema
    btnAnalisar.addEventListener("click", () => {
        console.log("Analisar button clicked"); // Debug click
        // alert("Analisar Clicked!"); // Remove alert
        analisarProblema(inputProblema.value);
    });
    // Permitir análise com Enter no input de problema
    inputProblema.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            analisarProblema(inputProblema.value);
        }
    });

    // Botão Buscar
    btnBuscar.addEventListener("click", () => {
        buscarTermo(inputBusca.value);
    });
    // Permitir busca com Enter no input de busca
    inputBusca.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            buscarTermo(inputBusca.value);
        }
    });

    // Botões de Navegação Auxiliar
    btnFaq.addEventListener("click", () => {
        if (conteudoFaq.classList.contains("conteudo-oculto")) {
            // Carrega o conteúdo se ainda não foi carregado
             if (!conteudoFaq.innerHTML || conteudoFaq.innerHTML.includes("será carregado aqui")) {
                 carregarFaq();
             }
            mostrarConteudo(conteudoFaq, btnFaq);
        } else {
            mostrarConteudo(null, null); // Esconde se já estiver visível
        }
    });

    btnWorkflows.addEventListener("click", () => {
        if (conteudoWorkflows.classList.contains("conteudo-oculto")) {
             // Carrega o conteúdo se ainda não foi carregado
             if (!conteudoWorkflows.innerHTML || conteudoWorkflows.innerHTML.includes("será carregada aqui")) {
                 carregarWorkflows();
             }
            mostrarConteudo(conteudoWorkflows, btnWorkflows);
        } else {
            mostrarConteudo(null, null); // Esconde se já estiver visível
        }
    });

    // Inicialização: Esconder seções auxiliares ao carregar e pré-carregar conteúdo
    mostrarConteudo(null, null);
    // Pré-carrega o conteúdo para evitar placeholders iniciais visíveis
    // carregarFaq(); // Descomentar se quiser pré-carregar FAQ
    // carregarWorkflows(); // Descomentar se quiser pré-carregar Workflows
});
