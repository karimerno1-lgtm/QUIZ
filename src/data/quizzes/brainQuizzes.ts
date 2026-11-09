import { Quiz } from '../../types/quiz';

const brainTiers = [
  {
    minPercent: 90,
    maxPercent: 100,
    title: 'Genius Mind',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    description: 'Astounding deductive intellect! You see through misdirection, logical paradoxes, and cognitive illusions with ease.',
    advice: 'Your analytical processing speed and pattern recognition are in the top 2% of thinkers.'
  },
  {
    minPercent: 75,
    maxPercent: 89,
    title: 'Razor-Sharp Analyst',
    badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
    description: 'High cognitive dexterity! You solved difficult lateral puzzles with disciplined deduction.',
    advice: 'Review the lateral explanations below to hone your intuitive problem-solving skills.'
  },
  {
    minPercent: 50,
    maxPercent: 74,
    title: 'Agile Thinker',
    badgeColor: 'bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-800',
    description: 'Good logical instincts! A couple of subtle trick questions caught you off guard, but your reasoning is sound.',
    advice: 'When tackling riddles, beware of common linguistic assumptions and mental shortcuts.'
  },
  {
    minPercent: 0,
    maxPercent: 49,
    title: 'Mental Explorer',
    badgeColor: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800',
    description: 'These lateral puzzles are notorious for tricking the mind. Learning how they work builds sharper neural pathways.',
    advice: 'Read the counter-intuitive explanations below, then challenge a friend to see if they can crack them!'
  }
];

export const brainQuizzes: Quiz[] = [
  {
    id: 'quiz-test-logical-thinking',
    slug: 'test-logical-thinking',
    title: 'Test Your Logical Thinking',
    tagline: 'Evaluate your deductive reasoning, syllogism precision, and sequential logic.',
    description: 'Can you separate valid conclusions from seductive fallacies? Put your analytical processing to the test with these formal deductive reasoning puzzles.',
    categorySlug: 'brain-intelligence',
    categoryName: 'Brain & Intelligence',
    type: 'knowledge',
    estimatedTime: '4 min',
    difficulty: 'Hard',
    gradient: 'from-amber-500 via-orange-600 to-rose-600',
    accentColor: 'amber',
    iconName: 'Brain',
    playsCount: 35100,
    featured: true,
    trending: true,
    knowledgeTiers: brainTiers,
    questions: [
      {
        id: 1,
        text: 'All Bloops are Razzies. All Razzies are Lizzies. All Lizzies are Pipis. Therefore, are all Bloops definitely Pipis?',
        options: [
          { text: 'Yes, definitely' },
          { text: 'No, never' },
          { text: 'Only under certain conditions' },
          { text: 'Cannot be determined' }
        ],
        correctIndex: 0,
        explanation: 'By the transitive property of syllogistic inclusion (A ⊆ B ⊆ C ⊆ D), Bloops are entirely contained within Pipis.'
      },
      {
        id: 2,
        text: 'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
        options: [
          { text: '$0.10 (10 cents)' },
          { text: '$0.05 (5 cents)' },
          { text: '$0.01 (1 cent)' },
          { text: '$0.15 (15 cents)' }
        ],
        correctIndex: 1,
        explanation: 'If Ball = x, then Bat = x + $1.00. Together: x + (x + 1.00) = 1.10 => 2x = 0.10 => x = $0.05. The bat is $1.05 and the ball is $0.05.'
      },
      {
        id: 3,
        text: 'If 5 machines take 5 minutes to make 5 widgets, how many minutes would it take 100 machines to make 100 widgets?',
        options: [
          { text: '100 minutes' },
          { text: '20 minutes' },
          { text: '5 minutes' },
          { text: '1 minute' }
        ],
        correctIndex: 2,
        explanation: 'Each machine produces 1 widget every 5 minutes. Therefore, 100 machines operating in parallel produce 100 widgets in exactly 5 minutes.'
      },
      {
        id: 4,
        text: 'In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days to cover the entire lake, how many days does it take to cover half the lake?',
        options: [
          { text: '24 days' },
          { text: '47 days' },
          { text: '12 days' },
          { text: '46 days' }
        ],
        correctIndex: 1,
        explanation: 'Since the patch doubles daily, on day 47 it is at exactly half size, doubling on day 48 to cover the whole lake.'
      },
      {
        id: 5,
        text: 'Which number logically completes the sequence: 2, 6, 12, 20, 30, ___?',
        options: [
          { text: '40' },
          { text: '42' },
          { text: '44' },
          { text: '48' }
        ],
        correctIndex: 1,
        explanation: 'The differences between consecutive numbers increase by 2 (+4, +6, +8, +10, +12). 30 + 12 = 42 (also n*(n+1): 1*2, 2*3, 3*4, 4*5, 5*6, 6*7=42).'
      },
      {
        id: 6,
        text: 'Look at this assertion: "If it is raining, the grass is wet." What can we strictly deduce if we observe that the grass is NOT wet?',
        options: [
          { text: 'It is definitely raining' },
          { text: 'It is definitely NOT raining' },
          { text: 'The sun is shining' },
          { text: 'Nothing can be deduced' }
        ],
        correctIndex: 1,
        explanation: 'By the logical rule of Modus Tollens (contrapositive): if P implies Q, then Not Q strictly implies Not P. It cannot be raining.'
      }
    ]
  },
  {
    id: 'quiz-tricky-riddles-challenge',
    slug: 'tricky-riddles-challenge',
    title: 'Tricky Riddles Challenge',
    tagline: 'Can you unravel these classic lateral riddles designed to deceive your expectations?',
    description: 'Riddles do not test straightforward math; they test whether your mind can question assumptions, spot linguistic double meanings, and shift paradigms.',
    categorySlug: 'brain-intelligence',
    categoryName: 'Brain & Intelligence',
    type: 'knowledge',
    estimatedTime: '4 min',
    difficulty: 'Medium',
    gradient: 'from-orange-500 via-amber-600 to-yellow-600',
    accentColor: 'orange',
    iconName: 'HelpCircle',
    playsCount: 30800,
    knowledgeTiers: brainTiers,
    questions: [
      {
        id: 1,
        text: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?',
        options: [
          { text: 'A Cloud' },
          { text: 'An Echo' },
          { text: 'A Whisper' },
          { text: 'A Shadow' }
        ],
        correctIndex: 1,
        explanation: 'An echo returns sound waves (speaks/hears without organs) and travels through air vibrations (wind).'
      },
      {
        id: 2,
        text: 'The more you take of me, the more you leave behind. What am I?',
        options: [
          { text: 'Footsteps' },
          { text: 'Time' },
          { text: 'Memories' },
          { text: 'Photographs' }
        ],
        correctIndex: 0,
        explanation: 'Every step you take leaves behind an imprint of your footstep.'
      },
      {
        id: 3,
        text: 'What has keys but cannot open locks, has space but no room, and allows you to enter but never go inside?',
        options: [
          { text: 'A Piano' },
          { text: 'A Keyboard' },
          { text: 'A Map' },
          { text: 'A Prison' }
        ],
        correctIndex: 1,
        explanation: 'A computer keyboard has letter keys, a Space bar, and an Enter key!'
      },
      {
        id: 4,
        text: 'What belongs to you, but everyone else uses it much more frequently than you do?',
        options: [
          { text: 'Your phone number' },
          { text: 'Your name' },
          { text: 'Your car' },
          { text: 'Your WiFi password' }
        ],
        correctIndex: 1,
        explanation: 'Your name is spoken and addressed by friends, family, and colleagues far more often than you say it yourself.'
      },
      {
        id: 5,
        text: 'A man pushes his car to a hotel and immediately tells the owner he is bankrupt. Why?',
        options: [
          { text: 'He was playing Monopoly' },
          { text: 'He ran out of gas and money' },
          { text: 'The hotel was a scam' },
          { text: 'His car caught on fire' }
        ],
        correctIndex: 0,
        explanation: 'He landed his car token on a property with a hotel in the board game Monopoly and owed exorbitant rent!'
      },
      {
        id: 6,
        text: 'I have branches, but no fruit, trunk, or leaves. What am I?',
        options: [
          { text: 'A River' },
          { text: 'A Bank' },
          { text: 'A Railroad' },
          { text: 'A Family tree' }
        ],
        correctIndex: 1,
        explanation: 'A commercial bank operates branches across cities without any foliage.'
      }
    ]
  },
  {
    id: 'quiz-brain-training-challenge',
    slug: 'brain-training-challenge',
    title: 'Brain Training Challenge',
    tagline: 'Test your working memory, mental arithmetic, and visual pattern recognition.',
    description: 'Engage in a series of cognitive gymnastics designed to stimulate neuroplasticity, working memory capacity, and quantitative agility.',
    categorySlug: 'brain-intelligence',
    categoryName: 'Brain & Intelligence',
    type: 'knowledge',
    estimatedTime: '4 min',
    difficulty: 'Medium',
    gradient: 'from-rose-500 via-pink-600 to-indigo-600',
    accentColor: 'rose',
    iconName: 'Zap',
    playsCount: 26400,
    knowledgeTiers: brainTiers,
    questions: [
      {
        id: 1,
        text: 'Mental Math: What is 15% of 240 plus half of 74?',
        options: [
          { text: '73' },
          { text: '71' },
          { text: '75' },
          { text: '69' }
        ],
        correctIndex: 0,
        explanation: '10% of 240 is 24; 5% is 12; so 15% is 36. Half of 74 is 37. 36 + 37 = 73.'
      },
      {
        id: 2,
        text: 'If you rearrange the letters "C I F I C A P", you get the name of an ocean. What is its first letter?',
        options: [
          { text: 'A' },
          { text: 'P' },
          { text: 'C' },
          { text: 'I' }
        ],
        correctIndex: 1,
        explanation: 'The letters unscramble to PACIFIC, which begins with the letter P.'
      },
      {
        id: 3,
        text: 'Which day comes three days after the day that immediately follows Tuesday?',
        options: [
          { text: 'Friday' },
          { text: 'Saturday' },
          { text: 'Sunday' },
          { text: 'Monday' }
        ],
        correctIndex: 1,
        explanation: 'The day following Tuesday is Wednesday. Three days after Wednesday (Thursday, Friday, Saturday) is Saturday.'
      },
      {
        id: 4,
        text: 'A clock shows 3:15. What is the angle between the hour hand and the minute hand?',
        options: [
          { text: '0 degrees' },
          { text: '7.5 degrees' },
          { text: '15 degrees' },
          { text: '22.5 degrees' }
        ],
        correctIndex: 1,
        explanation: 'At 3:15, the minute hand is at 90°. The hour hand moves 0.5° per minute, so at 15 minutes it is at 90° + (15 * 0.5°) = 97.5°. The difference is 7.5°.'
      },
      {
        id: 5,
        text: 'If 3 cats catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes?',
        options: [
          { text: '100 cats' },
          { text: '3 cats' },
          { text: '33 cats' },
          { text: '1 cat' }
        ],
        correctIndex: 1,
        explanation: '1 cat catches 1 mouse in 3 minutes. In 100 minutes, 1 cat can catch 33.3 mice. Therefore, 3 cats can catch 100 mice in 100 minutes!'
      }
    ]
  }
];
