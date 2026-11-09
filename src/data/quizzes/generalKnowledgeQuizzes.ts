import { Quiz } from '../../types/quiz';

const standardKnowledgeTiers = [
  {
    minPercent: 90,
    maxPercent: 100,
    title: 'Master Polymath',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
    description: 'Phenomenal erudition! You possess an extraordinary breadth of factual knowledge, analytical recall, and cultural depth.',
    advice: 'Challenge your smartest friends or colleagues to see if anyone can match your score.'
  },
  {
    minPercent: 75,
    maxPercent: 89,
    title: 'Intellectual Scholar',
    badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
    description: 'Impressive performance! You have a commanding grasp of history, science, and global culture.',
    advice: 'Review the few missed questions below to cement your mastery into the top 1%.'
  },
  {
    minPercent: 50,
    maxPercent: 74,
    title: 'Curious Explorer',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    description: 'Solid effort! You demonstrated strong foundational awareness with room to expand into nuanced trivia.',
    advice: 'Take another run at the quiz or explore our Brain Training challenges to sharpen your recall.'
  },
  {
    minPercent: 0,
    maxPercent: 49,
    title: 'Aspiring Apprentice',
    badgeColor: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800',
    description: 'Every expert was once a beginner. The questions were tricky, but you now hold valuable new facts.',
    advice: 'Review the explanations below, then try again to boost your score to the scholar tier!'
  }
];

export const generalKnowledgeQuizzes: Quiz[] = [
  {
    id: 'quiz-general-knowledge-challenge',
    slug: 'general-knowledge-challenge',
    title: 'General Knowledge Challenge',
    tagline: 'Test your breadth of worldly wisdom across science, geography, literature, and culture.',
    description: 'A prestigious test of trivia mastery designed to test your memory, cultural literacy, and scientific understanding. Can you score a perfect 100%?',
    categorySlug: 'general-knowledge',
    categoryName: 'General Knowledge',
    type: 'knowledge',
    estimatedTime: '5 min',
    difficulty: 'Medium',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    accentColor: 'teal',
    iconName: 'Globe',
    playsCount: 38400,
    featured: true,
    trending: true,
    knowledgeTiers: standardKnowledgeTiers,
    questions: [
      {
        id: 1,
        text: 'What chemical element is represented by the Latin-derived chemical symbol "Au"?',
        options: [
          { text: 'Silver' },
          { text: 'Gold' },
          { text: 'Copper' },
          { text: 'Platinum' }
        ],
        correctIndex: 1,
        explanation: '"Au" originates from the Latin word "Aurum", which translates to shining dawn or gold.'
      },
      {
        id: 2,
        text: 'Which planet in our solar system has the most extensive and visible ring system?',
        options: [
          { text: 'Jupiter' },
          { text: 'Uranus' },
          { text: 'Saturn' },
          { text: 'Neptune' }
        ],
        correctIndex: 2,
        explanation: 'Saturn possesses the most prominent ring system, composed mostly of water ice particles and rocky debris.'
      },
      {
        id: 3,
        text: 'Who authored the renowned 1813 romantic novel "Pride and Prejudice"?',
        options: [
          { text: 'Jane Austen' },
          { text: 'Charlotte Brontë' },
          { text: 'Mary Shelley' },
          { text: 'Virginia Woolf' }
        ],
        correctIndex: 0,
        explanation: 'Jane Austen published "Pride and Prejudice" in 1813, creating literary icons Elizabeth Bennet and Mr. Darcy.'
      },
      {
        id: 4,
        text: 'Which ocean is the largest and deepest on Earth, covering more than 30% of the planet’s surface?',
        options: [
          { text: 'Atlantic Ocean' },
          { text: 'Indian Ocean' },
          { text: 'Arctic Ocean' },
          { text: 'Pacific Ocean' }
        ],
        correctIndex: 3,
        explanation: 'The Pacific Ocean spans approximately 165 million square kilometers and plunges to the Mariana Trench (~11,034m).'
      },
      {
        id: 5,
        text: 'What is the primary gas that constitutes approximately 78% of Earth’s atmosphere?',
        options: [
          { text: 'Oxygen' },
          { text: 'Carbon Dioxide' },
          { text: 'Nitrogen' },
          { text: 'Argon' }
        ],
        correctIndex: 2,
        explanation: 'Nitrogen makes up roughly 78.08% of Earth’s atmosphere, followed by oxygen at approximately 20.95%.'
      },
      {
        id: 6,
        text: 'Which historic wall was built across northern Britain in 122 AD during the Roman Empire?',
        options: [
          { text: 'Antonine Wall' },
          { text: 'Hadrian’s Wall' },
          { text: 'Aurelian Wall' },
          { text: 'Servian Wall' }
        ],
        correctIndex: 1,
        explanation: 'Emperor Hadrian ordered the construction of Hadrian’s Wall in 122 AD to guard the frontier of Roman Britannia.'
      },
      {
        id: 7,
        text: 'In computing, what does the acronym "HTTP" stand for?',
        options: [
          { text: 'HyperText Transfer Protocol' },
          { text: 'High Tech Transmission Process' },
          { text: 'Hyperlink Text Target Platform' },
          { text: 'Host Terminal Transport Protocol' }
        ],
        correctIndex: 0,
        explanation: 'HTTP stands for HyperText Transfer Protocol, the foundational protocol used by the World Wide Web.'
      }
    ]
  },
  {
    id: 'quiz-world-geography-quiz',
    slug: 'world-geography-quiz',
    title: 'World Geography Quiz',
    tagline: 'Navigate global capitals, majestic mountain ranges, and international borders.',
    description: 'From landlocked nations to the highest mountain passes, test your geographic precision and discover how well you truly know our planet’s cartography.',
    categorySlug: 'general-knowledge',
    categoryName: 'General Knowledge',
    type: 'knowledge',
    estimatedTime: '4 min',
    difficulty: 'Medium',
    gradient: 'from-cyan-600 via-teal-600 to-emerald-600',
    accentColor: 'cyan',
    iconName: 'MapPin',
    playsCount: 29500,
    knowledgeTiers: standardKnowledgeTiers,
    questions: [
      {
        id: 1,
        text: 'What is the official capital city of Australia?',
        options: [
          { text: 'Sydney' },
          { text: 'Melbourne' },
          { text: 'Canberra' },
          { text: 'Brisbane' }
        ],
        correctIndex: 2,
        explanation: 'Canberra was chosen as Australia’s compromise capital between rivals Sydney and Melbourne in 1908.'
      },
      {
        id: 2,
        text: 'Which African country is completely surrounded by South Africa?',
        options: [
          { text: 'Lesotho' },
          { text: 'Eswatini' },
          { text: 'Botswana' },
          { text: 'Namibia' }
        ],
        correctIndex: 0,
        explanation: 'Lesotho is an enclaved nation entirely surrounded by the Republic of South Africa.'
      },
      {
        id: 3,
        text: 'The longest river in the world, traditionally measured, is:',
        options: [
          { text: 'Amazon River' },
          { text: 'Nile River' },
          { text: 'Yangtze River' },
          { text: 'Mississippi River' }
        ],
        correctIndex: 1,
        explanation: 'The Nile River in northeastern Africa spans roughly 6,650 km (4,132 miles), making it the longest river.'
      },
      {
        id: 4,
        text: 'Which strait separates the continents of Asia and North America at their closest points?',
        options: [
          { text: 'Strait of Gibraltar' },
          { text: 'Bering Strait' },
          { text: 'Bosphorus Strait' },
          { text: 'Strait of Malacca' }
        ],
        correctIndex: 1,
        explanation: 'The Bering Strait connects the Arctic Ocean with the Bering Sea and separates Russia from Alaska by about 82 km.'
      },
      {
        id: 5,
        text: 'Which country possesses the largest number of natural islands in the world (over 260,000)?',
        options: [
          { text: 'Indonesia' },
          { text: 'Sweden' },
          { text: 'Canada' },
          { text: 'Philippines' }
        ],
        correctIndex: 1,
        explanation: 'Sweden holds the world record with over 267,000 islands, followed closely by Finland and Norway.'
      },
      {
        id: 6,
        text: 'Mount Kilimanjaro, the highest free-standing mountain in the world, is located in:',
        options: [
          { text: 'Kenya' },
          { text: 'Tanzania' },
          { text: 'Uganda' },
          { text: 'Ethiopia' }
        ],
        correctIndex: 1,
        explanation: 'Mount Kilimanjaro (5,895 meters above sea level) is situated in northeastern Tanzania.'
      }
    ]
  },
  {
    id: 'quiz-history-knowledge-test',
    slug: 'history-knowledge-test',
    title: 'History Knowledge Test',
    tagline: 'Journey through centuries of empire, revolution, invention, and monumental diplomacy.',
    description: 'Travel from ancient Mesopotamia and the Roman Republic to the Renaissance and the 20th century. Test your grasp of the monumental events that shaped modern civilization.',
    categorySlug: 'general-knowledge',
    categoryName: 'General Knowledge',
    type: 'knowledge',
    estimatedTime: '4 min',
    difficulty: 'Hard',
    gradient: 'from-amber-600 via-yellow-600 to-emerald-600',
    accentColor: 'amber',
    iconName: 'Scroll',
    playsCount: 22100,
    knowledgeTiers: standardKnowledgeTiers,
    questions: [
      {
        id: 1,
        text: 'In which year did the French Revolution officially begin with the storming of the Bastille?',
        options: [
          { text: '1776' },
          { text: '1789' },
          { text: '1799' },
          { text: '1804' }
        ],
        correctIndex: 1,
        explanation: 'The storming of the Bastille took place on July 14, 1789, marking the watershed flashpoint of the French Revolution.'
      },
      {
        id: 2,
        text: 'Who was the first female Pharaoh of Egypt to rule in her own right with full pharaonic power?',
        options: [
          { text: 'Cleopatra VII' },
          { text: 'Nefertiti' },
          { text: 'Hatshepsut' },
          { text: 'Sobekneferu' }
        ],
        correctIndex: 2,
        explanation: 'Hatshepsut ruled Egypt from circa 1479 to 1458 BC, overseeing vast trade expeditions and monumental architecture.'
      },
      {
        id: 3,
        text: 'What ancient trade network linked China and East Asia with the Mediterranean world for centuries?',
        options: [
          { text: 'The Amber Road' },
          { text: 'The Silk Road' },
          { text: 'The Incense Route' },
          { text: 'The Royal Road' }
        ],
        correctIndex: 1,
        explanation: 'The Silk Road was an expansive network of overland and maritime trade routes facilitating cultural and commercial exchange.'
      },
      {
        id: 4,
        text: 'Which English monarch broke with the Roman Catholic Church to establish the Church of England?',
        options: [
          { text: 'Henry VII' },
          { text: 'Henry VIII' },
          { text: 'Edward VI' },
          { text: 'James I' }
        ],
        correctIndex: 1,
        explanation: 'Henry VIII initiated the English Reformation in the 1530s following the Pope’s refusal to annul his marriage to Catherine of Aragon.'
      },
      {
        id: 5,
        text: 'The famous ancient library of antiquity, destroyed across various conflicts, was situated in:',
        options: [
          { text: 'Athens' },
          { text: 'Alexandria' },
          { text: 'Babylon' },
          { text: 'Pergamon' }
        ],
        correctIndex: 1,
        explanation: 'The Great Library of Alexandria was founded in Egypt during the Ptolemaic dynasty as a center of universal scholarship.'
      },
      {
        id: 6,
        text: 'Which treaty signed in 1919 formally concluded World War I between Germany and the Allied Powers?',
        options: [
          { text: 'Treaty of Utrecht' },
          { text: 'Treaty of Versailles' },
          { text: 'Treaty of Brest-Litovsk' },
          { text: 'Treaty of Ghent' }
        ],
        correctIndex: 1,
        explanation: 'The Treaty of Versailles was signed on June 28, 1919, in the Hall of Mirrors at the Palace of Versailles.'
      }
    ]
  }
];
