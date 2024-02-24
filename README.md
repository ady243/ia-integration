## Backend

## Table of Contents

## General Info


---
## Prérequis

Vous devez avoir [Node JS](https://nodejs.org/en/) sur votre machine.

---
## Installation

📦 Il vous faut installer l'ensemble des dépendances avec `npm` en suivant la commande suivante :

```bash
npm install
```

---


### Configuration de l'application

#### Création du fichier `.env`

Vous pouvez copier le fichier `.env.example` et le renommer `.env` et remplacer les valeurs par défaut par vos propres valeurs.

### Docker
```bash
docker-compose up -d 
```

```bash
npm run migrate
```

### Pour lancer les seeds (données de test)

```bash
npm run seed
```

### Pour vider la base de données et les migrations

```bash
npm run reset
```

> Vous pouvez aussi utiliser la concaténation pour lancer les migrations et les seeds en une seule commande :

```bash
npm run reset:migrate
npm run reset:migrate:seed
```

### ✅ Pour lancer le serveur

- En mode production

```bash
npm run start
```

- En mode développement

```bash
npm run dev
```