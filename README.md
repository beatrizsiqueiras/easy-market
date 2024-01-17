#Easy-market:

<h2>How to use:</h2>
<h3>Required Technologies</h3>
<p>First, it will be necessary to install the following tools on your machine:</p>
<ul>
<li>npm</li>
<li>PHP 8.2</li>
<li>PostgreSQL</li>
</ul>
<h3>How to initiate the project</h3>
<ul>
<li>Clone this repository to your development environment:
 <pre>git clone https://github.com/beatrizsiqueiras/easy-market.git
</pre>
</li>
</ul>
<h5>To perform the database dump, follow the steps below:</h5>
<ul>
<li>If you use the pgAdmin DBMS, the default user is
<pre> user: <strong>postgres</strong>
</pre>and the password is 
<pre>password: <strong>root</strong></pre></li>
<li>For the next steps, replace 'YOUR_USER' with 'postgres,' for example.</li>
<br>
<li>In your terminal, navigate to the PostgreSQL bin folder: 
<pre>cd C:\Program Files\PostgreSQL\16\bin></pre>
</li>
<li>If you don't have a <strong>easy_market</strong> database created, do so with the following command: <pre>createdb -U YOUR_USER -h localhost -e -E UTF8 -O YOUR_USER easy_market</pre></li>

<li>And execute the following command: </li>

<li><pre>pg_restore -U YOUR_USER -h localhost -d easy_market pathToFile\backup.dump</pre></li>
<li><strong>Replace YOUR_USER with your PostgreSQL username and pathToFile\backup.dump with the full path to the backup file. Ensure that the easy_market database already exists in the development environment.</strong></li>

</ul>
<h4>With the project open in your code editor:</h4>
<ul>
<li>Open the terminal and navigate to the <pre> cd easy-market-front</pre> folder, then execute the command: <pre>npm start</pre></li>
<li>Open another terminal window, navigate to the <pre>cd easy-market-api</pre> folder, and execute the command: <pre>php -S localhost:8080<pre></li>
</ul>
<p>Done, after this, you will have access to the system.</p>
<pre>
Access link: <strong>http://localhost:3000/</strong>
Login: <strong>admin</strong>
Password: <strong>123456</strong></pre>
<hr>
<h2>Como iniciar:</h2>

<h3>Tecnologias Necessárias</h3>
<p>Primeiro, será necessário instalar as seguintes ferramentas em sua máquina: </p>
<ul>
<li>npm</li>
<li>PHP 8.2</li>
<li>PostgreSQL</li>
</ul>

<h3>Como iniciar o projeto</h3>
<ul>
<li>Clone este repositório em seu ambiente de desenvolvimento: <pre>git clone https://github.com/beatrizsiqueiras/easy-market.git
</pre></li>
</ul>
<h5>Para realizar o dump do banco de dados, siga os seguintes passos:</h5>
<ul>
<li>Se você usa o SGBD pgAdmin, o usuário padrão é 
<pre> user: <strong>postgres</strong>
</pre>and the password is
<pre>password: <strong>root</strong>
</pre>
</li>
<li>Para os próximos passos, substitua "SEU_USUARIO" para "postgres",por exemplo.</li>
<br>
<li>No seu terminal entre na pasta bin do PostgreSQL 
<pre>cd C:\Program Files\PostgreSQL\16\bin></pre>:</li>
<li>Caso não tenha um banco de dados do <strong>easy_market</strong> criado, crie com o comando: <pre>createdb -U SEU_USUARIO -h localhost -e -E UTF8 -O SEU_USUARIO easy_market</pre></li>
<li>E dê esse comando: </li>
<li><pre>pg_restore -U SEU_USUARIO -h localhost -d easy_market caminhoDoArquivo\backup.dump</pre></li>
<li> <strong>Substitua SEU_USUARIO pelo nome de usuário do PostgreSQL e caminhoDoArquivo\backup.dump pelo caminho completo do arquivo de backup e certifique-se de que o banco de dados easy_market já existe no ambiente de desenvolvimento.</strong>

</li>
</ul>

<h5>Com o projeto aberto em seu editor de código: </h5>
<ul>
<li>Abra o terminal e entre na pasta <pre>cd easy-market-front</pre> e dê o 
comando: <pre>npm start</pre> </li>
<li>Abra outra página do terminal e entre na pasta <pre>cd easy-market-api</pre> e dê o comando: <pre>php -S localhost:8080</pre> </li>

</ul>
<p>Pronto, após isso, poderá ter acesso ao sistema:</p>
<pre>
Link de acesso: <strong>http://localhost:3000/</strong>
Login: <strong>admin</strong>
Senha: <strong>123456</strong></pre>
