'use client';

import { useEffect, useMemo, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

type TocItem = { id: string; label: string };

export default function ScrollSpyToc({
  items,
  className = '',
  onNavigate,
}: {
  items: TocItem[];
  className?: string;
  onNavigate?: () => void;
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Görünenler arasından ekrana en yakın olanı seç
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        // sticky header yüzünden biraz aşağıdan say
        root: null,
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0.1, 0.2, 0.35, 0.5],
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);

  return (
    <nav className={className} aria-label="İçindekiler">
      <div className="space-y-1">
        {items.map((t) => {
          const active = t.id === activeId;
          return (
            <a
              key={t.id}
              href={`#${t.id}`}
              onClick={() => onNavigate?.()}
              className={`group flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors
                ${
                  active
                    ? 'bg-stone-50 text-primary'
                    : 'text-stone-600 hover:text-secondary hover:bg-stone-50'
                }`}
              aria-current={active ? 'location' : undefined}
            >
              <span>{t.label}</span>
              <span
                className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                  active ? 'opacity-100' : ''
                }`}
              >
                <Icon name="ChevronRightIcon" size={16} className="text-stone-400" />
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
