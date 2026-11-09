import { Category } from '../types/quiz';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-personality',
    slug: 'personality',
    name: 'Personality',
    shortDesc: 'Uncover your hidden traits, core archetypes, and authentic strengths.',
    description: 'Explore scientific and introspective personality assessments designed to help you understand your cognitive style, interpersonal dynamics, decision-making patterns, and subconscious superpowers.',
    iconName: 'UserCheck',
    gradient: 'from-purple-600 via-indigo-600 to-blue-600',
    accentColor: 'indigo',
    quizCount: 3,
    faqs: [
      {
        question: 'How do personality quizzes on Quizora work?',
        answer: 'Each personality assessment uses weighted multi-dimensional traits. As you answer scenario-based questions, scores are attributed to archetypes, yielding an accurate psychological and behavioral profile.'
      },
      {
        question: 'Can personality types change over time?',
        answer: 'While your core temperament often remains stable, personal growth, major life events, and new environments can develop secondary strengths and modify behavioral habits.'
      },
      {
        question: 'Are Quizora personality tests free and private?',
        answer: 'Yes! All Quizora quizzes run 100% locally in your browser. We never store personal data or require account creation.'
      }
    ]
  },
  {
    id: 'cat-love-relationships',
    slug: 'love-relationships',
    name: 'Love & Relationships',
    shortDesc: 'Deepen intimacy, discover love languages, and evaluate romantic compatibility.',
    description: 'Navigate the complexities of modern love with assessments that reveal how you give and receive affection, handle conflicts, prioritize values, and connect with your partner.',
    iconName: 'Heart',
    gradient: 'from-rose-500 via-pink-600 to-red-500',
    accentColor: 'rose',
    quizCount: 3,
    faqs: [
      {
        question: 'What are the five primary love languages?',
        answer: 'The five love languages are Words of Affirmation, Quality Time, Receiving Gifts, Acts of Service, and Physical Touch. Understanding your primary language fosters deeper empathy.'
      },
      {
        question: 'Can two people with different love languages be compatible?',
        answer: 'Absolutely. Compatibility thrives on mutual communication and effort to speak each other’s emotional dialect rather than having identical preferences.'
      },
      {
        question: 'How can I take a relationship quiz with my partner?',
        answer: 'Take the quiz individually, generate your shareable result link, and compare answers together for fun, constructive conversation starters.'
      }
    ]
  },
  {
    id: 'cat-general-knowledge',
    slug: 'general-knowledge',
    name: 'General Knowledge',
    shortDesc: 'Test your breadth of worldly wisdom across geography, history, and science.',
    description: 'Challenge your intellect with stimulating trivia spanning ancient civilizations, global geography, world milestones, and cultural trivia designed to exercise your curiosity.',
    iconName: 'Globe',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    accentColor: 'teal',
    quizCount: 3,
    faqs: [
      {
        question: 'How is the knowledge score calculated?',
        answer: 'Every correct response grants full credit. At the end, you receive an overall accuracy percentage, performance tier, and review of all correct answers with detailed explanations.'
      },
      {
        question: 'Are the questions verified for factual accuracy?',
        answer: 'Yes. All General Knowledge quizzes are meticulously curated and fact-checked against authoritative historical and geographical encyclopedias.'
      },
      {
        question: 'Can I challenge my friends to beat my score?',
        answer: 'Yes! After completing any trivia quiz, click "Challenge a Friend" to generate a challenge link prefilled with your score.'
      }
    ]
  },
  {
    id: 'cat-brain-intelligence',
    slug: 'brain-intelligence',
    name: 'Brain & Intelligence',
    shortDesc: 'Sharpen your analytical reasoning, mental agility, and lateral problem-solving.',
    description: 'Flex your cognitive muscles with lateral thinking riddles, pattern recognition challenges, and deductive logic puzzles created to keep your brain agile.',
    iconName: 'Brain',
    gradient: 'from-amber-500 via-orange-600 to-rose-600',
    accentColor: 'amber',
    quizCount: 3,
    faqs: [
      {
        question: 'Do logic puzzles improve cognitive function?',
        answer: 'Regular cognitive training stimulates neuroplasticity, boosts working memory, and sharpens analytical pattern recognition skills in everyday life.'
      },
      {
        question: 'What should I do if a riddle seems impossible?',
        answer: 'Read carefully for double meanings and linguistic assumptions. Riddles often hinge on wordplay or non-linear lateral perspectives.'
      }
    ]
  },
  {
    id: 'cat-entertainment',
    slug: 'entertainment',
    name: 'Entertainment',
    shortDesc: 'Celebrate pop culture, cinematic masterpieces, and iconic movie moments.',
    description: 'Immerse yourself in world cinema, beloved characters, cult classics, and emoji movie puzzles designed for casual movie lovers and cinephiles alike.',
    iconName: 'Film',
    gradient: 'from-violet-600 via-fuchsia-600 to-pink-500',
    accentColor: 'fuchsia',
    quizCount: 3,
    faqs: [
      {
        question: 'How are emoji movie puzzles structured?',
        answer: 'Each question presents a sequence of emojis representing key plot points, titles, or characters. Deduce the movie title from the clues.'
      },
      {
        question: 'Which genres of film are covered?',
        answer: 'From sci-fi and animation to historic drama and action thrillers, our entertainment trivia spans Hollywood classics and international modern cinema.'
      }
    ]
  },
  {
    id: 'cat-sports',
    slug: 'sports',
    name: 'Sports',
    shortDesc: 'Football trivia, legendary icons, memorable tournaments, and historic stats.',
    description: 'Step onto the pitch with authentic football trivia tests. Guess famous players, test your knowledge of European leagues, World Cup folklore, and tactical history.',
    iconName: 'Trophy',
    gradient: 'from-blue-600 via-sky-600 to-cyan-500',
    accentColor: 'blue',
    quizCount: 3,
    faqs: [
      {
        question: 'Does the sports quiz cover international football?',
        answer: 'Yes! Quizzes cover the UEFA Champions League, FIFA World Cup, Premier League, La Liga, and iconic legends like Pelé, Maradona, Messi, and Ronaldo.'
      },
      {
        question: 'How difficult are the football trivia tests?',
        answer: 'We have balanced difficulties ranging from foundational world-record questions to nuanced trivia for true football enthusiasts.'
      }
    ]
  },
  {
    id: 'cat-friends-social',
    slug: 'friends-social',
    name: 'Friends & Social',
    shortDesc: 'Uncover social styles, friendship dynamics, and how well your circle knows you.',
    description: 'Explore social personality dynamics, introvert vs. extrovert energy reserves, loyalty patterns, and find out what kind of friend you truly are in a group.',
    iconName: 'Users',
    gradient: 'from-emerald-600 via-teal-500 to-blue-600',
    accentColor: 'emerald',
    quizCount: 3,
    faqs: [
      {
        question: 'What is the ambivert balance?',
        answer: 'An ambivert is someone who displays both introverted and extroverted qualities depending on context, social energy, and situational comfort.'
      },
      {
        question: 'How can this strengthen friendships?',
        answer: 'Sharing results provides playful insights into how your friends process stress, celebrate wins, and give support when it matters most.'
      }
    ]
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}
