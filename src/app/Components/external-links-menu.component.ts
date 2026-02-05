import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface LinkItem {
  title: string;
  url: string;
  description?: string;
  category?: string;
  icon?: string;
  iconFa?: string;
}

@Component({
  selector: 'app-external-links-menu',
  standalone: true,                // <- ahora es standalone
  imports: [CommonModule, FormsModule], // <- importa FormsModule para ngModel
  templateUrl: './external-links-menu.component.html',
  styleUrls: [
    './external-links-menu.component.css',
    './chaac-xanab.css'
  ]
})
export class ExternalLinksMenuComponent {
  drawerOpen = false;
  showDescriptions = true;
  searchTerm = '';
  selectedCategory: string | null = null;

  links: LinkItem[] = [
    { title: 'Angular', url: 'https://angular.io', description: 'Docs Angular', category: 'Framework', icon: '📚', iconFa: 'fas fa-book' },
    { title: 'GitHub', url: 'https://github.com', description: 'Código', category: 'Código', icon: '🐱', iconFa: 'fab fa-github' },
  ];

  get categories(): string[] {
    return Array.from(new Set(this.links.map(l => l.category || 'Sin categoría')));
  }

  get filteredLinks(): LinkItem[] {
    const q = this.searchTerm.trim().toLowerCase();
    return this.links.filter(l => {
      const matchesQ = q === '' ||
        (l.title && l.title.toLowerCase().includes(q)) ||
        (l.description && l.description.toLowerCase().includes(q)) ||
        (l.url && l.url.toLowerCase().includes(q));
      const matchesCat = !this.selectedCategory || (l.category === this.selectedCategory);
      return matchesQ && matchesCat;
    });
  }

  openExternalLink(link: LinkItem) {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
    a.remove();
  }

  getCustomIcon(icon?: string): string { return icon || '🔗'; }
  toggleDrawer() { this.drawerOpen = !this.drawerOpen; }
  closeDrawer() { this.drawerOpen = false; }
  toggleDescriptions() { this.showDescriptions = !this.showDescriptions; }
  onKeydown(event: KeyboardEvent) { if (event.key === 'Escape') this.closeDrawer(); }
  selectCategory(cat: string | null) { this.selectedCategory = cat; }
}
