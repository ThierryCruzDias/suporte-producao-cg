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
                { pergunta: "Meu render está muito granulado (noise), como corrigir?", resposta: "O ruído geralmente vem de samples insuficientes. Aumente os samples:<br>1. **Global (Camera AA):** Aumenta a qualidade geral e afeta todos os outros samples. É o principal controle.<br>2. **Específicos (Diffuse, Specular, Transmission, SSS, Volume Indirect):** Aumente apenas os samples do tipo de raio que está causando o ruído. Ex: Se o reflexo está ruidoso, aume
(Content truncated due to size limit. Use line ranges to read in chunks)