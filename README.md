\chapter{RESULTADOS}
 
 Neste capítulo são descritos os resultados do sistema e de que forma foram obtidos. Foi realizado um teste para cada um dos subsistemas e por fim um teste de integração, sendo que cada subsistema também foi desenvolvido sob a mesma premissa. São apresentados o \textit{back-end}, o \textit{front-end}, a avaliação do banco de dados Firebase e do protótipo de Epi Inteligente desenvolvido.
 
 \section{\textit{BACK-END}}
 
 Para testes do \textit{Back-end} foi utilizado o Insomnia Designer versão 8.1.110.13, que permite gerar uma requisição por meio do protocolo \gls{http} para o servidor e analisar sua resposta sem o uso de um navegador. Essa solução é extremamente útil, pois permite que o \textit{back-end} possa ser desenvolvido e testado em um ambiente de desenvolvimento antes do \textit{front-end}. Na \autoref{fig:insomnia} é apresentado o ambiente para testes do \textit{back-end}, dividido em três colunas: a primeira corresponde ao nome da rota, a segunda o corpo da requisição e a última a resposta do servidor junto com o tempo decorrido para o processamento da requisição.
 
  \begin{figure}[H]
    \centering
    \caption{Ambiente de desenvolvimento no \textit{software} Insomnia.}
    \includegraphics[width=0.75\textwidth]{./dados/figuras/Insomnia2}
    \label{fig:insomnia}
    \fonte{Autoria própria (2021).}
    
\end{figure}

\newpage

O servidor se comportou de forma esperada, gerando as requisições de dados ao banco de dados no Firebase de forma correta e fornecendo estes dados para quem seja que o requisitou, bastando apenas receber a rota correta.

\section{\textit{FRONT-END}}
 
 O \textit{front-end} se comportou de maneira esperada, requisitando os dados de maneira controlada ao servidor sem gerar nenhum tipo de sobrecarga ou gerando requisições desnecessárias, evitando assim ultrapassar o limite de leituras e escritas do plano gratuito do Firebase. Este funcionamento é comprovado pela \autoref{fig:demonstacaoAplicacaoWeb}, na qual é mostrada a aplicação em funcionamento no navegador e ao lado o banco de dados, e pode-se observar que a aplicação respondeu corretamente aos valores gravados no Firebase.
 
 
 \begin{figure}[H]
    \centering
    \caption{Aplicação \gls{web} em funcionamento.}
    \includegraphics[width=1\textwidth]{./dados/figuras/demonstacaoAplicacaoWeb}
    \label{fig:demonstacaoAplicacaoWeb}
    \fonte{Autoria própria (2021).}
\end{figure}
 

\section{FIREBASE}

Na \autoref{fig:useFirebase} é possível verificar que mesmo durante o dia de testes mais intensos de todo o sistema o número de escrita e leitura ficou dentro do limite de 50 mil operações por dia do plano gratuito. Porém, para um sistema em escala de produção uma estratégia otimizada de troca de dados deve ser desenvolvida, dado que em uma jornada de trabalho de 8 horas possivelmente este limite será ultrapassado.

  \begin{figure}[H]
    \centering
    \caption{Gráfico de uso dos recursos do Firebase.}
    \includegraphics[width=1\textwidth]{./dados/figuras/usoDoFirebase}
    \label{fig:useFirebase}
    \fonte{Autoria própria (2021).}
\end{figure}

De maneira geral, o Firebase atendeu às aplicações e todos os testes de maneira estável e satisfatória, gerando apenas o erro de muitas requisições por dispositivo durante algumas inicializações do EPI inteligente. Este problema foi corrigido apenas reinicializando o dispositivo. 

\section{EPI INTELIGENTE}

A comunicação com cada sensor, bem como a leitura de cada uma de suas grandezas físicas e o envio e recebimento de dados para o servidor ocorreu de maneira esperada com o microcontrolador, como mostra a \autoref{fig:chamandoUsuario}. O dispositivo foi capaz de ler a informação de que seu usuário estava sendo chamado pelo gerente com a confirmação que todos os recursos estavam funcionando se prosseguiu com a calibração dos sensores.

\begin{figure}[H]
    \centering
    \caption{Dispositivo identificando uma chamada pelo supervisor.}
    \includegraphics[height= 0.4 \textwidth]{./dados/figuras/chamandoUsuario.jpg}
    \label{fig:chamandoUsuario}
    \fonte{Autoria própria (2021).}
\end{figure}
\newpage

\section{CALIBRAÇÃO DOS SENSORES}

Devido às limitações de tempo e acesso a equipamentos certificados para a calibração do EPI Inteligente, a mesma foi realizada com auxílio de aplicativos desenvolvido para celulares. Dessa forma, foi determinar a ordem de grandeza dos valores lidos pelos sensores. 

\subsection{CALIBRAÇÃO DO SENSOR DE RUÍDO}

 Para calibrar o sensor de ruído, o potenciômetro do dispositivo foi ajustado de forma a saída do sensor ser acionada apenas quando o ruído de impacto for emitido, não detectando o som ambiente. Com o auxílio do aplicativo Decibelímetro versão 2.07, foi captada uma amostra do som ambiente é conforme a \autoref{fig:decibelimetro}, o ruído de impacto possuiu a intensidade de 82 dB, ficando abaixo do nível de pico mínimo estabelecido pela \citeonline{NR9} que é de 120 dB. Para efeito de teste, foram arbitrados 4 impactos, a cada 5 segundos, como limite aceitável e 8 impactos, a cada 5 segundos, como limite máximo tolerável.


\begin{figure}[H]
    \centering
    \caption{Análise do ruído ambiente.}
    \includegraphics[height= 0.4 \textwidth]{dados/decibelimetro.jpg}
    \label{fig:decibelimetro}
    \fonte{Autoria própria (2021).}
\end{figure}

\subsection{CALIBRAÇÃO DO SENSOR DE LUMINOSIDADE}

Para calibrar o sensor de luminosidade, o dispositivo foi levado até um ambiente com luminosidade aceitável aferido com o auxílio do aplicativo Luxímetro versão 2.0, conforme a \autoref{fig:luximetro}, este valor medido foi definido como o limite mínimo. Posteriormente, o sistema foi levado a um ambiente com luminosidade ideal aferida pelo mesmo aplicativo e o valor medido neste local foi definido como limite aceitável. 

\begin{figure}[H]
    \centering
    \caption{Análise do ruído ambiente.}
    \includegraphics[height= 0.4 \textwidth]{dados/figuras/luxMeter.jpg}
    \label{fig:luximetro}
    \fonte{Autoria própria (2021).}
\end{figure}

\subsection{CALIBRAÇÂO DO SENSOR DE TEMPERATURA E VIBRAÇÃO}

Ambos sensores não foram calibrados utilizando uma ferramenta para tal. Portanto, foram utilizados os valores lidos diretamente para se estabelecer os limites de tolerância a estas grandezas sem nenhum método de calibração. Além disso, os limites de vibração foram estabelecidos arbitrariamente, conforme as vibrações provocadas manualmente. 

\section{VALIDAÇÃO DO DISPOSITIVO}

A validação se deu por meio de perturbações simuladas e os resultados foram de acordo com o esperado para os para todos os riscos ambientais quando exposto a níveis aceitáveis. Quando os limites foram ultrapassados o alarme foi apresentado ao usuário, conforme a \autoref{fig:alarme}, evidenciando o correto funcionamento do sistema de sinalização, leitura e processamento dos dados.

\begin{figure}[H]
    \centering
    \caption{Dispositivo apresentando alarme.}
    \includegraphics[height= 0.4 \textwidth]{./dados/usuarioEmRisco.jpg}
    \label{fig:alarme}
    \fonte{Autoria própria (2021).}
\end{figure}

O dispositivo também foi capaz de enviar corretamente os riscos aos quais o seu usuário estava configurado no banco de dados, podendo ser visualizados e interpretados de uma maneira intuitiva e rápida por meio da aplicação WEB que foi perfeitamente capaz de apresentar os resultados armazenados no Firebase, conforme \autoref{fig:alarmeWEB}.

\begin{figure}[H]
    \centering
    \caption{Alarme sendo apresentado na aplicação WEB.}
    \includegraphics[height= 0.4 \textwidth]{./dados/figuras/sistemaFuncionando.png}
    \label{fig:alarmeWEB}
    \fonte{Autoria própria (2021).}
\end{figure}
