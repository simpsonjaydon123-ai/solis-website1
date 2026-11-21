SOLIS — VISUAL ART & FREESTYLING WEBSITE

OPEN:
Double-click index.html to preview in a browser. No installation required.
For public hosting, upload index.html, style.css, script.js, content.js and sun-logo.svg together to Netlify, GitHub Pages or any static web host.

EDIT TEXT:
Option A: Open content.js in any text editor and change the quoted values, roster entries, or news entries. Save and refresh.
Option B: Open the website, click "Edit text", click highlighted text, and edit it directly. Use the panel to add/remove news and roster members. Your changes save ONLY in your own browser.

PUBLISH CHANGES FROM VISUAL EDITOR:
Click "Export JSON". Open the downloaded site-content.json. Copy its entire contents.
Open content.js and replace its contents with:
window.SITE_CONTENT = 
followed by the copied JSON and a semicolon at the end.
Save content.js and upload the updated file to your host.
IMPORTANT: Edits saved in your browser do not automatically appear to other visitors. Clear local browser changes using Reset to see the published version.

APPLICATION FORM:
Click Edit text and enter an applications email, then export and publish as above.
The form opens the visitor's email app with a prefilled application. It DOES NOT automatically send or store submissions. For real online submissions, integrate a backend/form provider.

CUSTOMIZATION:
style.css controls colors, spacing and layout. Change --accent and --bg near the top. The original editable sun emblem is in sun-logo.svg.
Replace placeholder names and announcements before publishing.
Google Fonts require internet; system fallback fonts work offline.

This is an original creative-collective design, not a copy of the reference site's source code or assets.

SOLIS EMBLEM: sun-logo.svg is the abstract white emblem used directly in the website header, hero and roster avatars.

ANIMATIONS:
Page changes use a short sun-emblem wipe. Headlines, cards and buttons animate in;
the sun floats and slowly rotates. All effects use CSS/JavaScript and require no
external animation files. To turn off motion, enable Reduce Motion in your device
settings. To customize animations, see the SOLIS CINEMATIC MOTION section in style.css.

LEADERSHIP / STAFF / CREATIVE TEAM DIRECTORY
Members group automatically by their "role" field in content.js.
Roles: Founder, Leader, Co-Leader, Management, Moderator, Event Manager,
Social Media Manager, Freestyler, Visual Artist, Editor, Designer,
Photographer, Illustrator, Motion Designer.
Each member supports optional "image" (relative file path or URL) and "link" (profile URL).
Example: {"name":"Example","role":"Founder","tag":"@example","image":"images/example.png","link":"https://example.com"}
Put images in an images folder beside index.html. Edit names and handles with Edit Text.
Edit roles, images and links in content.js and republish to update the public site.
If you previously edited this website in your browser, use Reset to see new defaults.

ROSTER DISPLAY FIX:
The leadership, staff and creative columns remain visible after Done Editing,
including empty categories. Members can have a combined role such as
"Founder/Freestyler" and appear in both appropriate sections.
If older local edits still show unexpected members in Other Creators,
edit the role in content.js or export your browser data, change the role
value, and import it again. Reset clears browser-only edits.

EDIT AVATARS: Click Edit text, then the small pencil on any member avatar. Choose an image.
The uploaded picture is cropped and saved locally in your browser. Click Export JSON
to back up edits. To publish, replace content.js with "window.SITE_CONTENT = " followed
by the exported JSON and a semicolon, then redeploy. The exported JSON embeds uploaded
pictures. GIF uploads become still images. The included apez-avatar.png is the APEZ starter.

INDEPENDENT ROSTER ENTRIES FIX:
Legacy combined roles (e.g. Founder/Freestyler) are split into two separate
entries when loaded. Removing the Freestyler entry no longer removes the Founder.
Editing a name, handle or avatar in one role does not affect the other.
In Edit Text mode, use the role dropdown below each member to change categories.
Export your JSON backup before changing files; do not click Reset unless you
want to erase local changes. Existing saved browser data is preserved.

SOLIS OPENING INTRO
The intro is inspired by the uploaded video: a dark full-screen logo reveal,
soft white glow, gold accent and a short progress line. It plays once per browser
tab and can be skipped. Open the website in a new tab to see it again.
To show it on every page reload, remove the sessionStorage check in script.js.
The intro automatically skips for visitors who prefer reduced motion.

NEON UPDATE: SOLIS now uses electric cyan, magenta and solar gold throughout the pages.
OPENING: Redesigned to resemble the supplied reference: a centered luminous logo on
black with quick light sweeps and a direct fade into the site. It plays once per tab.

CENTERED ROSTER: The roster is constrained to a centered content area, while retaining compact 262px role columns.

NEWS REDESIGN: News now appears in editorial rows with the date on the left, title and description on the right. No images required. News content is still edited via Edit Text. To add a Read More link, add a "link" field to a news item in content.js or exported JSON. The homepage About section now uses a continuous full-width background gradient instead of a visible cutoff.

FAVICON: The colorful SOLIS petal logo is now the browser tab icon. favicon.png, favicon.ico, and solis-rainbow-logo.png are included. If your browser shows the old icon, hard refresh or clear the site favicon cache.

FAVICON: The multicolor SOLIS artwork is preserved, with a deep violet/navy background replacing black. favicon.png and favicon.ico are both updated.


NETLIFY APPLICATIONS (IMPORTANT)
Applications now use native Netlify Forms, not mailto links.
1. Upload the entire extracted folder to Netlify, including thanks.html.
2. Netlify must process a fresh deployment to detect the HTML form.
3. In your Netlify dashboard, open Forms and look for solis-applications.
4. Submit a test application on your published https:// site.
5. Confirm it appears in the Netlify Forms submissions area.
6. Configure submission notifications in Netlify if you want email alerts.
This form does not send anything when opened from a local file.
The Edit Text button still controls the page text, but applications are no longer sent to the former applicationEmail field.
Do not collect sensitive personal details you do not need.
