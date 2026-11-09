import { Quiz } from '../../types/quiz';

const footballTiers = [
  {
    minPercent: 90,
    maxPercent: 100,
    title: 'Ballon d’Or Tactician',
    badgeColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    description: 'World-class football wisdom! You know your tactical history, World Cup drama, and player careers inside out.',
    advice: 'Send your score challenge link to your matchday group chat and see who can rival you.'
  },
  {
    minPercent: 75,
    maxPercent: 89,
    title: 'Premier League Analyst',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
    description: 'Top-tier football knowledge! You easily navigated the majority of tricky questions and records.',
    advice: 'Review the missed facts below to claim undisputed stadium bragging rights.'
  },
  {
    minPercent: 50,
    maxPercent: 74,
    title: 'Dedicated Matchgoer',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    description: 'Good effort! You recognized the big names and famous tournaments comfortably.',
    advice: 'Sharpen your knowledge of football history and legendary tournaments to rank higher.'
  },
  {
    minPercent: 0,
    maxPercent: 49,
    title: 'Academy Prospect',
    badgeColor: 'bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800',
    description: 'Football is full of surprising stats and unexpected folklore. You have great trivia to discover!',
    advice: 'Check out the explanations below, then take the pitch again!'
  }
];

export const sportsQuizzes: Quiz[] = [
  {
    id: 'quiz-football-knowledge-challenge',
    slug: 'football-knowledge-challenge',
    title: 'Football Knowledge Challenge',
    tagline: 'Test your grasp of the beautiful game: World Cups, Champions League, and historic records.',
    description: 'From dramatic last-minute Champions League finals to legendary World Cup winners, test how well you truly understand the world’s most popular sport.',
    categorySlug: 'sports',
    categoryName: 'Sports',
    type: 'knowledge',
    estimatedTime: '4 min',
    difficulty: 'Medium',
    gradient: 'from-blue-600 via-sky-600 to-cyan-500',
    accentColor: 'blue',
    iconName: 'Trophy',
    playsCount: 36200,
    featured: true,
    trending: true,
    knowledgeTiers: footballTiers,
    questions: [
      {
        id: 1,
        text: 'Which national team has won the most FIFA World Cup titles in football history (5 titles)?',
        options: [
          { text: 'Germany' },
          { text: 'Italy' },
          { text: 'Brazil' },
          { text: 'Argentina' }
        ],
        correctIndex: 2,
        explanation: 'Brazil won the FIFA World Cup in 1958, 1962, 1970, 1994, and 2002, holding the record with 5 titles.'
      },
      {
        id: 2,
        text: 'Which club has won the most UEFA Champions League / European Cup trophies (15 titles)?',
        options: [
          { text: 'AC Milan' },
          { text: 'Bayern Munich' },
          { text: 'Real Madrid' },
          { text: 'Liverpool' }
        ],
        correctIndex: 2,
        explanation: 'Real Madrid leads European football by an enormous margin, winning 15 European Cup / Champions League crowns.'
      },
      {
        id: 3,
        text: 'Who holds the record for the most goals scored in a single European league season (50 goals in 2011–12 La Liga)?',
        options: [
          { text: 'Cristiano Ronaldo' },
          { text: 'Lionel Messi' },
          { text: 'Robert Lewandowski' },
          { text: 'Erling Haaland' }
        ],
        correctIndex: 1,
        explanation: 'Lionel Messi scored an astonishing 50 league goals for FC Barcelona in the 2011–12 La Liga campaign (73 in all competitions).'
      },
      {
        id: 4,
        text: 'Which country hosted the inaugural FIFA World Cup tournament in 1930?',
        options: [
          { text: 'Uruguay' },
          { text: 'Brazil' },
          { text: 'Italy' },
          { text: 'France' }
        ],
        correctIndex: 0,
        explanation: 'Uruguay hosted and won the first ever World Cup in Montevideo in 1930, defeating Argentina 4-2 in the final.'
      },
      {
        id: 5,
        text: 'What is the standard regulatory duration of extra time in a knockout football match before penalties?',
        options: [
          { text: '20 minutes (two 10-minute halves)' },
          { text: '30 minutes (two 15-minute halves)' },
          { text: '15 minutes sudden death' },
          { text: '25 minutes (two 12.5-minute halves)' }
        ],
        correctIndex: 1,
        explanation: 'Extra time consists of two equal halves of 15 minutes each, totaling 30 minutes before a penalty shootout.'
      },
      {
        id: 6,
        text: 'Which player famously won the Ballon d’Or as a goalkeeper in 1963 (the only goalkeeper to ever do so)?',
        options: [
          { text: 'Gianluigi Buffon' },
          { text: 'Lev Yashin' },
          { text: 'Dino Zoff' },
          { text: 'Iker Casillas' }
        ],
        correctIndex: 1,
        explanation: 'Soviet goalkeeper Lev Yashin, known as "The Black Spider", is the only goalkeeper in history to win the Ballon d’Or (1963).'
      }
    ]
  },
  {
    id: 'quiz-guess-famous-football-player',
    slug: 'guess-famous-football-player',
    title: 'Guess the Famous Football Player',
    tagline: 'Can you identify football superstars from their club career clues and iconic achievements?',
    description: 'We give you their career pathway, famous kit numbers, and landmark trophies. Can you identify the football legend behind the resume?',
    categorySlug: 'sports',
    categoryName: 'Sports',
    type: 'knowledge',
    estimatedTime: '3 min',
    difficulty: 'Medium',
    gradient: 'from-sky-600 via-blue-700 to-indigo-800',
    accentColor: 'sky',
    iconName: 'Medal',
    playsCount: 31700,
    knowledgeTiers: footballTiers,
    questions: [
      {
        id: 1,
        text: 'Clues: Sporting CP -> Manchester United -> Real Madrid -> Juventus -> Al-Nassr. Over 900 official career goals. Who is he?',
        options: [
          { text: 'Luis Figo' },
          { text: 'Cristiano Ronaldo' },
          { text: 'Bruno Fernandes' },
          { text: 'Nani' }
        ],
        correctIndex: 1,
        explanation: 'Cristiano Ronaldo rose through Sporting CP, won trophies at Man United, Real Madrid, and Juventus, and captains Al-Nassr.'
      },
      {
        id: 2,
        text: 'Clues: Newell’s Old Boys -> FC Barcelona -> PSG -> Inter Miami. 8 Ballon d’Or titles, 2022 World Cup Champion. Who is he?',
        options: [
          { text: 'Diego Maradona' },
          { text: 'Lionel Messi' },
          { text: 'Angel Di Maria' },
          { text: 'Sergio Agüero' }
        ],
        correctIndex: 1,
        explanation: 'Lionel Messi spent two decades dominating European football at Barcelona before winning the 2022 World Cup with Argentina.'
      },
      {
        id: 3,
        text: 'Clues: French midfielder, won 1998 World Cup, scored an iconic volley in the 2002 Champions League final, managed Real Madrid to 3 consecutive UCLs.',
        options: [
          { text: 'Michel Platini' },
          { text: 'Thierry Henry' },
          { text: 'Zinedine Zidane' },
          { text: 'Didier Deschamps' }
        ],
        correctIndex: 2,
        explanation: 'Zinedine Zidane scored twice in the 1998 World Cup final and scored arguably the greatest volley in UCL final history in 2002.'
      },
      {
        id: 4,
        text: 'Clues: Croatian midfield maestro, won 6 Champions League titles with Real Madrid, won the 2018 Ballon d’Or and led his nation to the World Cup final.',
        options: [
          { text: 'Ivan Rakitic' },
          { text: 'Luka Modric' },
          { text: 'Davor Suker' },
          { text: 'Mateo Kovacic' }
        ],
        correctIndex: 1,
        explanation: 'Luka Modric won the 2018 Ballon d’Or after guiding Croatia to their historic World Cup final and anchoring Real Madrid’s midfield.'
      },
      {
        id: 5,
        text: 'Clues: Norwegian striking sensation, broke the Premier League single-season scoring record in his debut season with 36 goals, won the 2023 Treble with Man City.',
        options: [
          { text: 'Erling Haaland' },
          { text: 'Ole Gunnar Solskjaer' },
          { text: 'Alexander Isak' },
          { text: 'Martin Ødegaard' }
        ],
        correctIndex: 0,
        explanation: 'Erling Haaland shattered scoring records with 36 Premier League goals and 52 in all competitions during Manchester City’s historic Treble season.'
      }
    ]
  },
  {
    id: 'quiz-football-legends-trivia',
    slug: 'football-legends-trivia',
    title: 'Football Legends Trivia',
    tagline: 'Honor the timeless heroes: Pelé, Maradona, Cruyff, Beckenbauer, and Maldini.',
    description: 'Travel through the history of the sport to remember the architects of Total Football, the kings of South American flair, and the greatest defenders of all time.',
    categorySlug: 'sports',
    categoryName: 'Sports',
    type: 'knowledge',
    estimatedTime: '4 min',
    difficulty: 'Hard',
    gradient: 'from-blue-700 via-indigo-700 to-purple-800',
    accentColor: 'indigo',
    iconName: 'Shield',
    playsCount: 24300,
    knowledgeTiers: footballTiers,
    questions: [
      {
        id: 1,
        text: 'Pelé is the only footballer to have won three FIFA World Cup trophies. In which years did he achieve this feat?',
        options: [
          { text: '1958, 1962, 1970' },
          { text: '1954, 1958, 1962' },
          { text: '1962, 1966, 1970' },
          { text: '1958, 1966, 1974' }
        ],
        correctIndex: 0,
        explanation: 'Pelé won his first World Cup in 1958 at age 17, repeated in 1962, and triumphed again with the iconic 1970 squad.'
      },
      {
        id: 2,
        text: 'Which legendary Dutch player and manager pioneered "Total Football" and won three European Cups with Ajax?',
        options: [
          { text: 'Marco van Basten' },
          { text: 'Johan Cruyff' },
          { text: 'Ruud Gullit' },
          { text: 'Dennis Bergkamp' }
        ],
        correctIndex: 1,
        explanation: 'Johan Cruyff revolutionized tactical football as both an Ajax and Netherlands playmaker, later founding Barcelona’s "Dream Team".'
      },
      {
        id: 3,
        text: 'Franz Beckenbauer, nicknamed "Der Kaiser", popularized which defensive role that roamed ahead of the back line?',
        options: [
          { text: 'The Libero / Sweeper' },
          { text: 'The Inverted Wingback' },
          { text: 'The False Nine' },
          { text: 'The Box-to-Box Destroyer' }
        ],
        correctIndex: 0,
        explanation: 'Beckenbauer reinvented the modern Sweeper/Libero role, initiating attacking moves from deep defense for Bayern Munich and West Germany.'
      },
      {
        id: 4,
        text: 'Diego Maradona’s famous "Goal of the Century" against England occurred in which World Cup tournament?',
        options: [
          { text: 'Spain 1982' },
          { text: 'Mexico 1986' },
          { text: 'Italy 1990' },
          { text: 'USA 1994' }
        ],
        correctIndex: 1,
        explanation: 'Maradona scored both the "Hand of God" and the 60-meter dribble "Goal of the Century" in the 1986 quarter-final in Mexico City.'
      },
      {
        id: 5,
        text: 'Paolo Maldini spent his entire 25-season professional playing career at one single club, winning 5 European Cups. Which club?',
        options: [
          { text: 'Juventus' },
          { text: 'Inter Milan' },
          { text: 'AC Milan' },
          { text: 'AS Roma' }
        ],
        correctIndex: 2,
        explanation: 'Paolo Maldini played 902 appearances exclusively for AC Milan from 1984 to 2009, cementing his place among football’s greatest defenders.'
      }
    ]
  }
];
