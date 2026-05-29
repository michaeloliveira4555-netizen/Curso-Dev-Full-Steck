# Guia Git: Múltiplas Contas com SSH no Windows

Este guia serve como consulta rápida para gerenciar e alternar facilmente entre suas contas do GitHub (`michaeloliveira4555-netizen` e `projetoesfasbm-source`) no mesmo computador, sem precisar ficar digitando usuários e senhas.

---

## 🔑 1. O Arquivo de Configuração Principal (`~/.ssh/config`)
O arquivo que gerencia qual chave usar para cada conta está configurado no seu computador em `C:\Users\Pichau\.ssh\config` com esta estrutura:

```ini
# Conta Pessoal
Host github.com-michael
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_michael

# Segunda Conta
Host github.com-projeto
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_projeto
```

---

## 📂 2. Como configurar a conta em um projeto

Sempre que você criar ou abrir um repositório, você deve configurar o **E-mail do autor** e a **URL remota** dele usando os passos abaixo.

### 👤 Passo A: Definir o Autor do Commit (E-mail local)
Abra o terminal na pasta do projeto e execute os comandos abaixo para definir o autor correto dos commits (sem usar `--global` para não afetar outras pastas):

#### Para projetos da conta Pessoal (`michael`):
```bash
git config user.name "michaeloliveira4555-netizen"
git config user.email "michael.oliveira4555@gmail.com"
```

#### Para projetos da outra conta (`projeto`):
```bash
git config user.name "projetoesfasbm-source"
git config user.email "projetoesfasbm@gmail.com"
```

---

### 🌐 Passo B: Configurar a URL de envio (Remote)

#### Cenário 1: Repositório que já existe no computador (HTTPS para SSH)
Se o projeto já possui arquivos e você quer mudar de HTTPS para SSH, rode o comando abaixo substituindo `NOME_DO_REPOSITORIO` pelo nome correto dele no GitHub:

* **Para conta Pessoal:**
  ```bash
  git remote set-url origin git@github.com-michael:michaeloliveira4555-netizen/NOME_DO_REPOSITORIO.git
  ```
* **Para a outra conta:**
  ```bash
  git remote set-url origin git@github.com-projeto:projetoesfasbm-source/NOME_DO_REPOSITORIO.git
  ```

#### Cenário 2: Clonando um repositório existente no GitHub
Ao copiar o link de clonagem no GitHub, escolha a aba **SSH**. Mude o domínio `github.com` para o Host configurado:

* **Para conta Pessoal:**
  ```bash
  git clone git@github.com-michael:michaeloliveira4555-netizen/nome-do-repositorio.git
  ```
* **Para a outra conta:**
  ```bash
  git clone git@github.com-projeto:projetoesfasbm-source/nome-do-repositorio.git
  ```

#### Cenário 3: Inicializando um projeto do zero na máquina (`git init`)
```bash
git init
git add .
git commit -m "Initial commit"
# Adiciona o remote com o host SSH correto:
git remote add origin git@github.com-michael:michaeloliveira4555-netizen/nome-do-novo-repositorio.git
git push -u origin main
```

---

## 🚀 3. Dia a Dia
Uma vez configurado o repositório, você **não precisa digitar nada disso novamente**. Você usará apenas os comandos normais:
```bash
git add .
git commit -m "Seu commit"
git push
```
O Git usará a chave certa automaticamente de acordo com o projeto que você estiver editando.
