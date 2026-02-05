export interface ExternalLink {
id: number;
title: string;
url: string;
description: string;
icon: string;
category: 'social' | 'documentation' | 'resources' | 'tools';
openInNewTab: boolean;
}


export const EXTERNAL_LINKS: ExternalLink[] = [
{
id: 1,
title: 'Documentación Angular',
url: 'https://angular.io/docs',
description: 'Documentación oficial de Angular para desarrolladores',
icon: 'code',
category: 'documentation',
openInNewTab: true
},
{
id: 2,
title: 'GitHub del Proyecto',
url: 'https://github.com/angular/angular',
description: 'Repositorio oficial del framework Angular',
icon: 'github',
category: 'resources',
openInNewTab: true
},
{
id: 3,
title: 'Angular en Twitter',
url: 'https://twitter.com/angular',
description: 'Últimas noticias y actualizaciones del equipo de Angular',
icon: 'twitter',
category: 'social',
openInNewTab: true
},
{
id: 4,
title: 'Stack Overflow',
url: 'https://stackoverflow.com/questions/tagged/angular',
description: 'Comunidad de preguntas y respuestas sobre Angular',
icon: 'help_outline',
category: 'resources',
openInNewTab: true
},
{
id: 5,
title: 'Angular DevTools',
url: 'https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh',
description: 'Herramientas de desarrollo para depurar aplicaciones Angular',
icon: 'bug_report',
category: 'tools',
openInNewTab: true
}
];