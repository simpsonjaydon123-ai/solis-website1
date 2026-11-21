SOLIS SECURE ADMIN SETUP

1. Create a PRIVATE GitHub repository for these site files. Upload the CONTENTS of this folder to the repository root.
2. In Netlify, connect the existing site to the GitHub repository for continuous deployment. Ensure the publish directory is the repository root. Deploy the site.
3. In GitHub Settings > Developer settings > Personal access tokens > Fine-grained tokens, create a token restricted to ONLY your SOLIS repository, with Contents: Read and write. Set a short expiration and rotate it regularly. Never share the token or commit it to the repo.
4. Visit https://YOUR-SITE.netlify.app/admin.html, enter the repository owner, name, branch, and token. Edit content, then click Publish.
5. GitHub commits trigger Netlify deployment. Wait for deploy to complete, then refresh the public site.

SECURITY: This admin page is publicly reachable, but publishing requires a GitHub token with write access. It never embeds or saves the token. Keep your GitHub account protected with 2FA. This is a token-based admin login, NOT a traditional username/password account. Anyone who obtains your token can edit your repo until revoked. The repository is private but the Netlify site remains public. Applications remain handled by Netlify Forms. Public visitors have no editing controls.

IMPORTANT: Do not use manual drag-and-drop deploys after connecting GitHub if you expect admin changes to publish; the site must be linked to the same repo/branch.
