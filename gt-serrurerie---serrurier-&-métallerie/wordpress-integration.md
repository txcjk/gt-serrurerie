# Guide d'intégration WordPress & Elementor - GT Serrurerie

Ce guide vous explique comment déployer votre application React sur un site WordPress existant.

## Étape 1 : Générer les fichiers de production
Lancez la commande suivante dans votre environnement de développement :
```bash
npm run build
```
Récupérez le contenu du dossier `dist`.

## Étape 2 : Hébergement des fichiers
Vous avez deux options pour héberger les fichiers :

### Option 1 : Sous-répertoire (Simple)
1. Connectez-vous à votre serveur via FTP (FileZilla).
2. Créez un dossier `gt-app` à la racine de votre site WordPress.
3. Transférez tout le contenu du dossier `dist` à l'intérieur.
4. Votre application est maintenant accessible via `https://votre-site.com/gt-app/`.

### Option 2 : CDN ou Hébergement dédié (Vercel / Netlify)
Déployez le dossier `dist` sur une plateforme comme Vercel (gratuit) pour obtenir une URL sécurisée.

## Étape 3 : Intégration dans Elementor
1. Modifiez votre page avec Elementor.
2. Ajoutez un widget **HTML**.
3. Utilisez le code Iframe pour une intégration propre qui ne casse pas le CSS de votre thème WordPress :

```html
<div class="gt-serrurerie-container" style="width: 100%; overflow: hidden;">
    <iframe 
        src="https://votre-site.com/gt-app/" 
        style="width: 1px; min-width: 100%; height: 90vh; border: none;" 
        loading="lazy">
    </iframe>
</div>
```

## Étape 4 : Configuration des formulaires
Le formulaire de contact actuel est une interface client. Pour qu'il envoie réellement des emails depuis WordPress :
1. Vous pouvez utiliser un service comme **EmailJS** (gratuit) pour relier le formulaire React à votre boîte mail sans avoir besoin de PHP.
2. Ou rediriger le bouton "Envoyer" vers votre page de contact WordPress habituelle.

## Conseils SEO
Pour que WordPress reconnaisse le contenu de votre application React :
- Remplissez les balises Meta dans Elementor sur la page où vous insérez l'Iframe.
- Assurez-vous que le titre de la page WordPress correspond à "GT Serrurerie - Serrurerie & Métallerie à Bordeaux".
