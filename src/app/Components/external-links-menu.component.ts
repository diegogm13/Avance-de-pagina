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
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    { 
      title: 'Nike', 
      url: 'https://www.nike.com', 
      description: 'Zapatería deportiva líder mundial', 
      category: 'Deportiva', 
      icon: '👟', 
      iconFa: 'fas fa-running' 
    },
    { 
      title: 'Adidas', 
      url: 'https://www.adidas.com', 
      description: 'Calzado deportivo y moda urbana', 
      category: 'Deportiva', 
      icon: '⚽', 
      iconFa: 'fas fa-futbol' 
    },
    { 
      title: 'Puma', 
      url: 'https://www.puma.com', 
      description: 'Calzado deportivo y lifestyle', 
      category: 'Deportiva', 
      icon: '🐆', 
      iconFa: 'fas fa-cat' 
    },
    { 
      title: 'Converse', 
      url: 'https://www.converse.com', 
      description: 'Zapatillas icónicas desde 1908', 
      category: 'Lifestyle', 
      icon: '⭐', 
      iconFa: 'fas fa-star' 
    },
    { 
      title: 'Vans', 
      url: 'https://www.vans.com', 
      description: 'Calzado para skate y estilo urbano', 
      category: 'Lifestyle', 
      icon: '🛹', 
      iconFa: 'fas fa-skating' 
    },
    { 
      title: 'Zara', 
      url: 'https://www.zara.com', 
      description: 'Moda y calzado contemporáneo', 
      category: 'Moda', 
      icon: '👔', 
      iconFa: 'fas fa-tshirt' 
    },
    { 
      title: 'Steve Madden', 
      url: 'https://www.stevemadden.com', 
      description: 'Calzado de moda y tendencias', 
      category: 'Moda', 
      icon: '👠', 
      iconFa: 'fas fa-shoe-prints' 
    },
    { 
      title: 'Gucci', 
      url: 'https://www.gucci.com', 
      description: 'Calzado de lujo y alta costura', 
      category: 'Lujo', 
      icon: '💎', 
      iconFa: 'fas fa-gem' 
    },
    { 
      title: 'Clarks', 
      url: 'https://www.clarks.com', 
      description: 'Zapatos de calidad desde 1825', 
      category: 'Tradicional', 
      icon: '👞', 
      iconFa: 'fas fa-user-tie' 
    },
    { 
      title: 'Dr. Martens', 
      url: 'https://www.drmartens.com', 
      description: 'Botas icónicas desde 1960', 
      category: 'Tradicional', 
      icon: '👢', 
      iconFa: 'fas fa-boot' 
    },
    { 
      title: 'New Balance', 
      url: 'https://www.newbalance.com', 
      description: 'Zapatillas cómodas y de calidad', 
      category: 'Deportiva', 
      icon: '🏃', 
      iconFa: 'fas fa-walking' 
    },
    { 
      title: 'Skechers', 
      url: 'https://www.skechers.com', 
      description: 'Calzado cómodo para todos los días', 
      category: 'Deportiva', 
      icon: '👟', 
      iconFa: 'fas fa-shoe-prints' 
    },
    { 
      title: 'Instagram Moda', 
      url: 'https://www.instagram.com/explore/tags/zapateria/', 
      description: 'Tendencias de calzado en redes', 
      category: 'Social', 
      icon: '📱', 
      iconFa: 'fab fa-instagram' 
    },
    { 
      title: 'Guía de Tallas', 
      url: 'https://www.sizechart.com', 
      description: 'Documentación sobre tallas', 
      category: 'Utilidades', 
      icon: '📏', 
      iconFa: 'fas fa-ruler' 
    },
    { 
      title: 'Comparador', 
      url: 'https://www.shoeprices.com', 
      description: 'Herramienta para comparar precios', 
      category: 'Utilidades', 
      icon: '💲', 
      iconFa: 'fas fa-chart-line' 
    }
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