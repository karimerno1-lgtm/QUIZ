import React from 'react';
import { Category } from '../types/quiz';
import { useRouter } from '../lib/router';
import {
  UserCheck,
  Heart,
  Globe,
  Brain,
  Film,
  Trophy,
  Users,
  ArrowRight
} from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  UserCheck,
  Heart,
  Globe,
  Brain,
  Film,
  Trophy,
  Users
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { navigate } = useRouter();
  const IconComponent = iconMap[category.iconName] || Globe;

  return (
    <article
      onClick={() => navigate(`/category/${category.slug}`)}
      className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono">
            {category.quizCount} Quizzes
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {category.name}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
          {category.shortDesc}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
        <span>Explore Category</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </article>
  );
};
